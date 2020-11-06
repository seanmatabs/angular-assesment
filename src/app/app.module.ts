import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { CaptureComponent } from './capture/capture.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MaterialModule} from './core/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import { SetOneComponent } from './forms/set-one/set-one.component';
import { SetTwoComponent } from './forms/set-two/set-two.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DataService} from './core/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayComponent,
    CaptureComponent,
    PageNotFoundComponent,
    SetOneComponent,
    SetTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
