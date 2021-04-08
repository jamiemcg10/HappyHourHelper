import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service'
import { Drink, DrinkList } from '../../types/types'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})

export class SearchPageComponent implements OnInit {

  @Output() displayRecipe: EventEmitter<any> = new EventEmitter()

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.prevSearches = this.cocktailService.prevSearches || {}  // if there have been searches, get them from the service
    this.numSearches = Object.keys(this.prevSearches).length
  }

  searchTerm: ''
  searchResults: Drink[]
  numSearches: number
  prevSearches : any

  performSearch() : void {
    if (this.cocktailService.prevSearches[this.searchTerm]){  // search has been done before
      this.searchResults = this.cocktailService.prevSearches[this.searchTerm]
      this.numSearches++
    } else {  // search via api
      this.cocktailService.getCocktailByName(this.searchTerm)
      .subscribe((data: DrinkList)=>{
        this.cocktailService.prevSearches[this.searchTerm] = data.drinks
        this.searchResults = data.drinks    
        this.numSearches++
      })
    }
  } 

  getRecipe(recipeId: string) : void { // get recipe if the result is clicked
    this.cocktailService.getCocktailById(recipeId)
      .subscribe((data: Drink)=>{
        this.displayRecipe.emit(data)  // send event to app to display recipe
      })
  }

  loadSearchResults(term:string) : void {  // load results for previously searched term
    this.searchResults = this.cocktailService.prevSearches[term] 
  }

  getKeys(obj: any) : string[] { // get an array of keys in an object
    return Object.keys(obj)
  }

}
