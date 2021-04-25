import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { DrinkList } from 'src/app/types/types';
import { CocktailService } from '../../services/cocktail.service'
import { DataCacheService } from '../../services/data-cache.service'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipe = {
    strDrink: '',
    strDrinkThumb: '',
    strIngredient1: '',
    strIngredient2: '',
    strIngredient3: '',
    strIngredient4: '',
    strIngredient5: '',
    strIngredient6: '',
    strIngredient7: '',
    strIngredient8: '',
    strIngredient9: '',
    strIngredient10: '',
    strIngredient11: '',
    strIngredient12: '',
    strIngredient13: '',
    strIngredient14: '',
    strIngredient15: '',
    strMeasure1: '',
    strMeasure2: '',
    strMeasure3: '',
    strMeasure4: '',
    strMeasure5: '',
    strMeasure6: '',
    strMeasure7: '',
    strMeasure8: '',
    strMeasure9: '',
    strMeasure10: '',
    strMeasure11: '',
    strMeasure12: '',
    strMeasure13: '',
    strMeasure14: '',
    strMeasure15: '',
    strInstructions: ''
  }  // holds the recipe passed in

  recipeExists = true

  constructor(
    private cocktailService: CocktailService, 
    private route: ActivatedRoute,
    private dataCacheService: DataCacheService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      const id = params.get('id')
      if (this.dataCacheService.recipes[id] !== undefined){
        this.recipe = this.dataCacheService.recipes[id]
      } else {
        this.cocktailService.getCocktailById(id)
        .subscribe((data: DrinkList)=>{
          if (data.drinks){
            this.recipeExists = true
            this.recipe = data.drinks[0]
            this.dataCacheService.recipes[id] = data.drinks[0]
          } else {
            this.recipeExists = false
          }
        })
      }
    })
  }

}
