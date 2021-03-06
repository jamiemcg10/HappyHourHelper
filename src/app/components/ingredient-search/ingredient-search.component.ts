import { Component, OnInit } from '@angular/core'
import { CocktailService } from '../../services/cocktail.service'
import { DataCacheService } from '../../services/data-cache.service'
import { DrinkList } from '../../types/types'

@Component({
  selector: 'app-ingredient-search',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.scss']
})
export class IngredientSearchComponent implements OnInit {


  constructor(
    private cocktailService: CocktailService, 
    private dataCacheService: DataCacheService
  ) { }

  ngOnInit(): void {
    if (Object.keys(this.dataCacheService.ingredients).length > 0){
      // drinks have already been fetched - get them from the service
      this.ingredients = this.dataCacheService.ingredients
    } else {
      // make an api call to get the drinks     
      Object.keys(this.ingredients).forEach((key: string)=>{
        this.cocktailService.searchByIngredient(key)
          .subscribe((data: DrinkList) => {
            // add drinks to the ingredients object
            this.ingredients[key].drinks = data.drinks
          })
      })

      this.dataCacheService.ingredients = this.ingredients  // add the drinks to the service
    }

  }
  
  // object to hold ingredients in list
  ingredients = {
    "Absolut Citron": { isCollapsed: true },
    "Ale": { isCollapsed: true },
    "Amaretto": { isCollapsed: true },
    "Apple brandy": { isCollapsed: true },
    "Applejack": { isCollapsed: true },
    "Apricot brandy": { isCollapsed: true },
    "Blackberry brandy": { isCollapsed: true },
    "Blended whiskey": { isCollapsed: true },
    "Bourbon": { isCollapsed: true },
    "Brandy": { isCollapsed: true },
    "Champagne": { isCollapsed: true },
    "Cherry brandy": { isCollapsed: true },
    "Chocolate liqueur": { isCollapsed: true },
    "Coffee brandy": { isCollapsed: true },
    "Coffee liqueur": { isCollapsed: true },
    "Cognac": { isCollapsed: true },
    "Creme de Cacao": { isCollapsed: true },
    "Creme de Cassis": { isCollapsed: true },
    "Dark rum": { isCollapsed: true },
    "Dubonnet Rouge": { isCollapsed: true },
    "Dry Vermouth": { isCollapsed: true },
    "Everclear": { isCollapsed: true },
    "Firewater": { isCollapsed: true },
    "Galliano": { isCollapsed: true },
    "Gin": { isCollapsed: true },
    "Irish cream": { isCollapsed: true },
    "Irish whiskey": { isCollapsed: true },
    "Kahlua": { isCollapsed: true },
    "Lager": { isCollapsed: true },
    "Lemon vodka": { isCollapsed: true },
    "Light rum": { isCollapsed: true },
    "Midori melon liqueur": {  isCollapsed: true },
    "Ouzo": { isCollapsed: true },
    "Peach Vodka": { isCollapsed: true },
    "Peppermint schnapps": { isCollapsed: true },
    "Pisco": { isCollapsed: true },
    "Port": { isCollapsed: true },
    "Red wine": { isCollapsed: true },
    "Ricard": { isCollapsed: true },
    "Rum": { isCollapsed: true },
    "Scotch": { isCollapsed: true },
    "Sherry": { isCollapsed: true },
    "Sloe gin": { isCollapsed: true },
    "Southern Comfort": { isCollapsed: true },
    "Spiced rum": { isCollapsed: true },
    "Strawberry schnapps": { isCollapsed: true },
    "Sweet Vermouth": { isCollapsed: true },
    "Tequila": { isCollapsed: true },
    "Triple sec": { isCollapsed: true },
    "Vodka": { isCollapsed: true },
    "Whiskey": { isCollapsed: true }
  }

  ingredientList = Object.keys(this.ingredients) // initialize array of ingredients

}
