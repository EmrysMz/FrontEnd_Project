import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-steps',
  templateUrl: './number-steps.component.html',
  styleUrls: ['./number-steps.component.css']
})
export class NumberStepsComponent {
  @Output() decr10 = new EventEmitter<number>();
  @Output() decr1 = new EventEmitter<number>();
  @Output() incr1 = new EventEmitter<number>();
  @Output() incr10 = new EventEmitter<number>();

  onClickDecr10() {
    this.decr10.emit(-10);
  }

  onClickDecr1() {
    this.decr1.emit(-1);
  }

  onClickIncr1() {
    this.incr1.emit(1);
  }

  onClickIncr10() {
    this.incr10.emit(10);
  }
}
