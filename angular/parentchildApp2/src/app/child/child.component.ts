import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 @Output() colors = new EventEmitter;

 send(t: { value: any; }){
   this.colors.emit(t.value);
 }
 
}
