import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  name:string | undefined;
  ngOnInit() {
  }
   f1(e: string | undefined){
     this.name = e
   }

}
