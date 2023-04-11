import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-app-lifecyclehooks',
  templateUrl: './app-lifecyclehooks.component.html',
  styleUrls: ['./app-lifecyclehooks.component.css']
})
export class AppLifecyclehooksComponent implements OnInit {

  @Input() childData:string="someText";
  constructor() { 
    console.log("Constructor is called");
    console.log(this.childData);
  }

  ngOnchanges(changes:SimpleChanges){
    console.log("Child component ngOnchanges is called...!");
    console.log(changes);
  }

  ngOnInit():void {
    
  }

}