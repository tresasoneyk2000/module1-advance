import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchildApp3';
  messagefromparent!:string;
  message1!:string;
 
  count!:number;
  tocount!:number;

  senddatatochild(){
  this.messagefromparent="this is from parent";
}
messagefromchild(msg:any){
  this.message1=msg;
}
addcount(n:any){
  this.count=n;
}
reset(){
  this.count=0;
}
}
