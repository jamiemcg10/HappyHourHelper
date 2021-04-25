import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { CocktailService } from './services/cocktail.service'
import { Drink, DrinkList } from './types/types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private titleService: Title,
    private cocktailService: CocktailService,
    private router: Router,
  ){ }

  ngOnInit(): void {
    this.titleService.setTitle('Happy Hour Helper')
  }

  title = 'Happy Hour Helper';
  selectedRecipe: Drink  // which recipe is shown in the recipe component when it is loaded

  getRandomRecipe() : void {
    // get a random recipe from the api
    this.cocktailService.getRandomRecipe()
      .subscribe((data: DrinkList) => {
        this.router.navigateByUrl(`/recipe/${data.drinks[0].idDrink}`)
      })
  }

}
