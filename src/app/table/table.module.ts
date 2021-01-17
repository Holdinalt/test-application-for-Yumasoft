
import { NgModule } from '@angular/core';
import {TableComponent} from './table.component';

import {DataInputModule} from './data-input/data-input.module';
import {DataTableModule} from './data-table/data-table.module';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    DataInputModule,
    DataTableModule
  ],
  exports: [TableComponent],
  providers: []
})
export class TableModule { }
