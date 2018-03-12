import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[magic-foo]',
  host: {
    '[class.magic-foo-applied]': 'true'
  }
})
export class FooDirective {
  constructor() {
    console.log('hello from foo');
  }
}
