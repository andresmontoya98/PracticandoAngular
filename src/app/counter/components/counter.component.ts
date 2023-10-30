import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button> `,
})
export class CounterComponent {
  constructor() {}
  public counter: number = 10;

  increaseBy(value: number = 0): void {
    value ? (this.counter += value) : (this.counter = 10);
  }
}
