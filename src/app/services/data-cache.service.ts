import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCacheService {

  constructor() { }
  
  ingredients: any = {}
  letters: any = {}
  prevSearches = {}
  recipes = {}

}
