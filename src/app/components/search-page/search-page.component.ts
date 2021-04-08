import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service'
import { DataCacheService } from '../../services/data-cache.service'
import { EventService } from '../../services/event.service'
import { Drink, DrinkList } from '../../types/types'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})

export class SearchPageComponent implements OnInit {

  @Output() displayRecipe: EventEmitter<any> = new EventEmitter()

  constructor(
    private cocktailService: CocktailService, 
    private dataCacheService: DataCacheService,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.prevSearches = this.dataCacheService.prevSearches || {}  // if there have been searches, get them from the service
    this.numSearches = Object.keys(this.prevSearches).length
  }

  searchTerm: ''
  searchResults: Drink[]
  numSearches: number
  prevSearches : any

  performSearch() : void {
    if (this.dataCacheService.prevSearches[this.searchTerm]){  // search has been done before
      this.searchResults = this.dataCacheService.prevSearches[this.searchTerm]
      this.numSearches++
    } else {  // search via api
      this.cocktailService.getCocktailByName(this.searchTerm)
      .subscribe((data: DrinkList)=>{
        this.dataCacheService.prevSearches[this.searchTerm] = data.drinks
        this.searchResults = data.drinks    
        this.numSearches++
      })
    }
  } 


  loadSearchResults(term:string) : void {  // load results for previously searched term
    this.searchResults = this.dataCacheService.prevSearches[term] 
  }

  getKeys(obj: any) : string[] { // get an array of keys in an object
    return Object.keys(obj)
  }

}
