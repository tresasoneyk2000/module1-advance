import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-item',
  templateUrl: './parent-item.component.html',
  styleUrls: ['./parent-item.component.css']
})
export class ParentItemComponent implements OnInit {
  @Input() parent: any;
  @Input()  mode: any;

  constructor() { }

  ngOnInit() {
  }

  click(child:any){
    console.log(event);
    console.log(this.parent);
    if(this.parent.children){
      this.parent.children.map((child: { checked: boolean; }) => { child.checked = !this.parent.checked});
    }
  }

}
