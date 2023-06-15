import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']

 
})
export class ChildComponent implements OnInit{
  @Input("parentCount")
  count!: number;
  
  @Output()
  updateFromChild: EventEmitter<number> = new EventEmitter<number>();
  
  updateCount() {
    this.count++;
    this.updateFromChild.emit(this.count);
  }
  constructor() { }

  ngOnInit() {
  }

}
