import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  getRandomRecipe() : Observable<any>{  
    // get random recipe for surprise me tab
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php?a=Alcoholic')
  }
 
  searchByIngredient(ingredient: string) : Observable<any> { 
    // get all drinks made using a specififed ingredient
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
  }

  getFullListByLetter(letter: string) : Observable<any> {
    // get all drinks starting with a specified letter
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}&a=Alcoholic`)
  }

  getCocktailByName(cocktailName: string) : Observable<any> {
    // get all drinks matching the specified name
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)

  }

  getCocktailById(id: string) : Observable<any> {
    // get a specific cocktail recipe using its id
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  }
}
