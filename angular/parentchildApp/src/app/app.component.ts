import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static title(title: any) {
    throw new Error('Method not implemented.');
  }
  title = 'parentchildApp';
  enterName="Tresa";
  enterData=0;
  parentdata="";
  parentValue=0;
  value="";
  transferData(){
    this.parentdata=this.enterName;
    this.parentValue=this.enterData;
  }
  // transferData2(){
  //   this.sendData;
  // }
  sendData(value:string){
    this.value=value;

  }
}
