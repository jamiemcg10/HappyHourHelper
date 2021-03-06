import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service'
import { DataCacheService } from '../../services/data-cache.service'
import { Drink, DrinkList } from '../../types/types'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})

export class SearchPageComponent implements OnInit {

  @ViewChild('searchbar') input: ElementRef;

  constructor(
    private cocktailService: CocktailService, 
    private dataCacheService: DataCacheService,
  ) { }

  ngOnInit(): void {
    this.prevSearches = this.dataCacheService.prevSearches || {}  // if there have been searches, get them from the service
    this.numSearches = Object.keys(this.prevSearches).length
  }

  ngAfterViewInit() {
    this.input.nativeElement.blur();
    this.input.nativeElement.focus();
 }

  searchTerm: ''
  searchResults: Drink[]
  numSearches: number
  prevSearches : any
  freshPage = true

  performSearch() : void {
    if (!this.searchTerm){
      return;
    }
    this.freshPage = false
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
