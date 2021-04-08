import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core'
import { CocktailService } from './cocktail.service'
import { DrinkList } from '../types/types'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private cocktailService: CocktailService) { }

  DisplayRecipeEvent = new EventEmitter()

  getRecipe(recipeId: string) : void {
    this.cocktailService.getCocktailById(recipeId)
      .subscribe((data: DrinkList)=>{
        this.DisplayRecipeEvent.emit(data)
      })
  }
}
