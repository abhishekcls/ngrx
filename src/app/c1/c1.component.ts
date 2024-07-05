import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1Component implements OnInit, OnDestroy {
  counter = 0;
  counterSub?: Subscription;

  constructor(private ds: DataService) { }
  ngOnDestroy(): void {
    if (this.counterSub) {
      this.counterSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.counterSub = this.ds.counterChanged.subscribe(newval => this.counter = newval)
  }

}
