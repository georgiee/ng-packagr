import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[magic-button]',
  host: {
    '[class.magic-button-applied]': 'true'
  }
})
export class ButtonDirective {
  constructor() {
    console.log('hello from button');
  }
}
