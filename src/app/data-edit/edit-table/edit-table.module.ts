import {NgModule} from '@angular/core';

import {EditTableComponent} from './edit-table.component';
import {EditTableRowComponent} from './edit-table-row.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {PassportHandlerService} from '../../passport-handler.service';

@NgModule({
  imports: [FormsModule, BrowserModule],
  declarations: [EditTableComponent, EditTableRowComponent],
  exports: [
    EditTableComponent,
  ],
  providers: [PassportHandlerService]
})

export class EditTableModule {}
