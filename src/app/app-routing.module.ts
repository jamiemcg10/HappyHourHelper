import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FullListComponent } from './components/full-list/full-list.component'
import { RecipeComponent } from './components/recipe/recipe.component'
import { SearchPageComponent } from './components/search-page/search-page.component'
import { NotFoundComponent } from './components/not-found/not-found.component'

const routes: Routes = [
    { path: '',
      component: FullListComponent
    },    
    { path: 'recipe/:id',
      component: RecipeComponent
    },    
    { path: 'search',
      component: SearchPageComponent
    },    
    {
      path: '**',
      component: NotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }