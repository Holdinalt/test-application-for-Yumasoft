import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TableModule} from './table/table.module';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './layout/header.component';
import {DataEditModule} from './data-edit/data-edit.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    DataEditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
