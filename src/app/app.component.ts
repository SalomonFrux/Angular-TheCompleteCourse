import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fld5';
  displayClickedTab = "";
  recipeItem = [{type: "NEW RECIPES", name: "YOUR NEW RECIPES", content: "Your new recipes will display here"},]

  constructor() { }
 

  onDataAdded(event:any){
    this.recipeItem.push({ type: "static", name: event.inputName, content: event.inputContent});
    }

    showSelected(event: any){
      this.displayClickedTab = event
    }
}
