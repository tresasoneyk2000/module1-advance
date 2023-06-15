import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-children2',
  templateUrl: './children2.component.html',
  styleUrls: ['./children2.component.css']
})
export class Children2Component {
  constructor() { }

  ngOnInit() {
  }

@Input() values: any;


}
