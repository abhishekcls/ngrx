import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.css'
})
export class C2Component {
  constructor(private ds: DataService) { }

  increment() {
    this.ds.increment();
  }

  decrement() {
    this.ds.decrement();
  }
}
