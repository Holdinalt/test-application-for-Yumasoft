import {NgModule} from '@angular/core';

import {EditTableComponent} from './edit-table.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {TableHandlerService} from '../Table-handler.service';

@NgModule({
  imports: [FormsModule, BrowserModule],
  declarations: [EditTableComponent],
  exports: [
    EditTableComponent,
  ],
  providers: [TableHandlerService]
})

export class EditTableModule {}
