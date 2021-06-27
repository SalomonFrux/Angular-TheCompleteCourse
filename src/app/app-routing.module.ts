import { AddComponent } from './recipe/add/add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './recipe/edit/edit.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: "shopping-list", component: ShoppingListComponent },

  {
    path: "recipe", component: RecipeComponent,

    children: [
      { path: "add", component: AddComponent },
      { path: ":id", component: RecipeDetailsComponent },
      { path: ":id/:name", component: EditComponent },
     

      {
        path: "recipe-list", component: RecipeListComponent,
        children: [
          { path: ":id/recipe-item", component: RecipeItemComponent },
        ]
      },


    ]
  },

  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "home" }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
