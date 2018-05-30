import { Component } from '@angular/core';
import { someOtherFoo } from './foo';

@Component({
  selector: 'bar-component',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss', './bar.component.less', './bar.component.styl']
})
export class BarComponent {
  constructor() {
    console.log(someOtherFoo('abc'));
  }
}
