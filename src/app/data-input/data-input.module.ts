import {NgModule} from '@angular/core';
import {DataInputComponent} from './data-input.component';

import {FormsModule} from '@angular/forms';
import {TableHandlerService} from '../Table-handler.service';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [DataInputComponent],
  exports: [
    DataInputComponent
  ],

    imports: [FormsModule, BrowserModule],
  providers: [TableHandlerService]
})

export class DataInputModule {}
