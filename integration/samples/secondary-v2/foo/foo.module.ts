import { NgModule } from '@angular/core';
import { FooDirective } from './foo.directive';

@NgModule({
  declarations: [FooDirective],
  exports: [FooDirective]
})
export class FooModule {}
