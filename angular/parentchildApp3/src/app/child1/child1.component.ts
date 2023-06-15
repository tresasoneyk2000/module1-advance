import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @Output() public messagechild=new EventEmitter();
  calling(){
this.messagechild.emit("from child1");
  }


}
