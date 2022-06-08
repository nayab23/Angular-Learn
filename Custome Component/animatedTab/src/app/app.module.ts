import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimatedTabComponent } from './animated-tab/animated-tab.component';
import { SampleAnimatedTabComponent } from './sample-animated-tab/sample-animated-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimatedTabComponent,
    SampleAnimatedTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
