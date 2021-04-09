import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { FullListComponent } from './components/full-list/full-list.component';
import { LetterSearchComponent } from './components/letter-search/letter-search.component';
import { IngredientSearchComponent } from './components/ingredient-search/ingredient-search.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeComponent } from './components/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    FooterComponent,
    FullListComponent,
    LetterSearchComponent,
    IngredientSearchComponent,
    HeaderComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
