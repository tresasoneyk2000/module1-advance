import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


  @Input()
  message!:string;
  @Input()
  count1!:number;
  
  @Output()
  public counting = new EventEmitter();
  adding(){
    this.count1++;
    this.counting.emit(this.count1);
  }
  

}
