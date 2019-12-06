import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    NgCircleProgressModule.forRoot({
      "backgroundStrokeWidth": 0,
      "backgroundPadding": 7,
      "radius": 65,
      "space": -2,
      "toFixed": 0,
      "outerStrokeWidth": 2,
      "outerStrokeColor": "#FFA804",
      "innerStrokeColor": "#FFA804",
      "innerStrokeWidth": 2,
      "titleFontSize": "18",
      "subtitleFontSize": "19",
      "imageHeight": 178,
      "imageWidth": 163,
      "animateTitle": false,
      "animationDuration": 700,
      "showSubtitle": false,
      "showUnits": false,
      "showInnerStroke": false,
      "clockwise": false
      
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
