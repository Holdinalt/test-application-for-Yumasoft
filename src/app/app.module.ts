import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './layout/header.component';
import {EditTableModule} from './edit-table/edit-table.module';
import {UnloadModule} from './unload/unload.module';
import {DataInputModule} from './data-input/data-input.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataInputModule,
    EditTableModule,
    UnloadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
