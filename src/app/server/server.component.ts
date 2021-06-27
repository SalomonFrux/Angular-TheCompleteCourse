import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
 btnMessage = ['']; 
 serverName = "";
  constructor() { }

  ngOnInit() {
  }
 
  onButtonClicked(){
    
    this.btnMessage.push(this.serverName)
  }
  
  onServerNameEntered(e: any){
    this.serverName = e.target.value; 
  }
}
