import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Linked from the the samples folder
import { ButtonModule } from '@sample/secondary-v2/button';
import { FooModule } from '@sample/secondary-v2/foo';

// My other local build version of Button & Foo Modules
// import { ButtonModule } from '@magic/library/button';
// import { FooModule } from '@magic/library';
import { SecondaryV2Component } from './secondary-v2.component';

@NgModule({
  imports: [CommonModule, ButtonModule, FooModule],
  declarations: [SecondaryV2Component],
  exports: [SecondaryV2Component]
})
export class SecondaryV2Module {}
