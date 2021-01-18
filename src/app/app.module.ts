import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TableModule} from './table/table.module';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './layout/header.component';
import {EditTableModule} from './edit-table/edit-table.module';
import {UnloadModule} from './unload/unload.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    EditTableModule,
    UnloadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
