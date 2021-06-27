import { ActivatedRoute, Params } from '@angular/router';
import { ApplicationServices } from 'src/app/services/application.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
showForm='';
  constructor(private appService: ApplicationServices, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.showAddForm();
  //  this.route.params.subscribe((params: Params) => {
  //    let paramName = params.name;
  //    if(paramName=== 'add'){
  //      this.showAddForm();
  //    }
  //  })
  }

  showAddForm(){
    this.appService.addRecipeEvent.subscribe((rep: void)=>
    {
      this.showForm = 'show'
      
    })
  }

}
