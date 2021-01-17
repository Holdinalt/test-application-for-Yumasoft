import {NgModule} from '@angular/core';
import {DataInputComponent} from './data-input.component';

import {FormsModule} from '@angular/forms';
import {PassportHandlerService} from '../../passport-handler.service';
import {NgxCsvParserModule} from "ngx-csv-parser";

@NgModule({
  declarations: [DataInputComponent],
  exports: [
    DataInputComponent
  ],

  imports: [FormsModule],
  providers: [PassportHandlerService]
})

export class DataInputModule {}
