    import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Soham';
  title="component_lifecyclehooks";
  parentData:string="";
  sendDataChild(inpText:HTMLInputElement){
    this.parentData=inpText.value;
  }
}
