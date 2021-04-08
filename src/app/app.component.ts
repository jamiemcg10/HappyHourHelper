import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { MainComponent } from './types/types'
import { CocktailService } from './services/cocktail.service'
import { Drink, DrinkList } from './types/types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private cocktailService: CocktailService, private titleService: Title){ }

  ngOnInit(): void {
    this.titleService.setTitle('Happy Hour Helper')
    this.selectedComponent = MainComponent.List
  }

  title = 'Happy Hour Helper';
  activeTab = [1,0,0,0]  // keep track of active tab for highlighting
  selectedComponent: MainComponent  // which component is loaded in the page
  selectedRecipe: Drink  // which recipe is shown in the recipe component when it is loaded

  public get MainComponent(){
    return MainComponent
  }

  switchComponent(component: MainComponent) : void {
    // switch active component
    this.activeTab[this.selectedComponent] = 0
    this.selectedComponent = component
    this.activeTab[this.selectedComponent] = 1
  }

  getRandomRecipe() : void {
    // get a random recipe from the api
    this.cocktailService.getRandomRecipe()
      .subscribe((data: DrinkList) => {
        this.selectedRecipe = data.drinks[0]
        this.activeTab[this.selectedComponent] = 0
        this.selectedComponent = MainComponent.Recipe
      })
  }

  displayRecipe(event: {drinks: Drink[]}) : void {
    // display a specif recipe sent from a child component
    this.activeTab[this.selectedComponent] = 0
    this.selectedRecipe = event.drinks[0]
    this.selectedComponent = MainComponent.Recipe
  }




}
