import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CropperComponent } from './cropper/cropper.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { CropperimageComponent } from './cropperimage/cropperimage.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CropperComponent, RangeSliderComponent, CropperimageComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
