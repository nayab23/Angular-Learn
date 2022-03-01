import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { FaInputComponent } from './fa-input/fa-input.component';
import { VisionButtonComponent } from './vision-componenet/vision-button/vision-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentProjectionComponent,
    FaInputComponent,
    VisionButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
