import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CustomModule } from 'sample-custom';
import { UiLibModule } from '@sample/material';

import { AppComponent } from './app.component';
import { CdkModule } from './cdk/cdk.module';
import { SecondaryV2Module } from './secondary-v2/secondary-v2.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // samples
    CustomModule,
    UiLibModule,

    // app
    CdkModule,
    SecondaryV2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
