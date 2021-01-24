import {NgModule} from '@angular/core';
import {DataInputComponent} from './data-input.component';

import {FormsModule} from '@angular/forms';
import {PassportsHandlerService} from '../passports-handler.service';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [DataInputComponent],
  exports: [
    DataInputComponent
  ],

    imports: [FormsModule, BrowserModule],
  providers: [PassportsHandlerService]
})

export class DataInputModule {}
