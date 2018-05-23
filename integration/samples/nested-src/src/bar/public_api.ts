import { STATIC_MAIN_ENTRY_VALUE } from '@sample/nested-src';
import { STATIC_FOO_VALUE, FooClass } from '@sample/nested-src/src/foo';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'lib-bar',
  template: 'This is bar with message from foo: {{message}}'
})
export class BarComponent {
  message = 'non';
  constructor() {
    this.message = `${STATIC_FOO_VALUE} + ${STATIC_MAIN_ENTRY_VALUE}`;
  }
}

@NgModule({
  declarations: [BarComponent],
  exports: [BarComponent],
  providers: []
})
export class BarModule {}
