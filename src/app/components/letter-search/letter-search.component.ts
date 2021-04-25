import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service'
import { DataCacheService } from '../../services/data-cache.service'
import { DrinkList } from '../../types/types'

@Component({
  selector: 'app-letter-search',
  templateUrl: './letter-search.component.html',
  styleUrls: ['./letter-search.component.scss']
})
export class LetterSearchComponent implements OnInit {

  constructor(
    private cocktailService: CocktailService, 
    private dataCacheService: DataCacheService
  ) { }

  ngOnInit(): void {
    if (Object.keys(this.dataCacheService.letters).length > 0){
      // drinks are in service - get them from there
      this.letters = this.dataCacheService.letters
    } else {
      // get the drinks from the api
      Object.keys(this.letters).forEach((key: string)=>{
        this.cocktailService.getFullListByLetter(key)
          .subscribe((data: DrinkList) => {
            this.letters[key].drinks = data.drinks
          })
      })

      this.dataCacheService.letters = this.letters
    }
  }

  letters = {
      a: { isCollapsed: true },
      b: { isCollapsed: true },
      c: { isCollapsed: true },
      d: { isCollapsed: true },
      e: { isCollapsed: true },
      f: { isCollapsed: true },
      g: { isCollapsed: true },
      h: { isCollapsed: true },
      i: { isCollapsed: true },
      j: { isCollapsed: true },
      k: { isCollapsed: true },
      l: { isCollapsed: true },
      m: { isCollapsed: true },
      n: { isCollapsed: true },
      o: { isCollapsed: true },
      p: { isCollapsed: true },
      q: { isCollapsed: true },
      r: { isCollapsed: true },
      s: { isCollapsed: true },
      t: { isCollapsed: true },
      u: { isCollapsed: true },
      v: { isCollapsed: true },
      w: { isCollapsed: true },
      x: { isCollapsed: true },
      y: { isCollapsed: true },
      z: { isCollapsed: true }
  }

  letterList = Object.keys(this.letters)

}
