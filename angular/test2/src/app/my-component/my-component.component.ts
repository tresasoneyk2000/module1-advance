import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
  <h1>{{ title }}</h1>
  <p>Counter: {{ counter }}</p>
  <button (click)="incrementCounter()" [disabled]="counter >= 5">Increment</button>
`,
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  title = 'My Component';
  counter = 0;

  incrementCounter() {
    this.counter++;
  }
  

}
