import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { ApplicationServices } from './services/application.services';
import {DropdownDirective } from './directive/dropdown.directive';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './recipe/edit/edit.component';
import { AddComponent } from './recipe/add/add.component';


@NgModule({
  declarations: [	
    AppComponent,
      ServerComponent,
      RecipeComponent,
      RecipeListComponent,
      RecipeItemComponent,
      RecipeDetailsComponent,
      ShoppingListComponent,
      HeaderComponent,
      DropdownDirective,
      HomeComponent,
      EditComponent,
      AddComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ApplicationServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
