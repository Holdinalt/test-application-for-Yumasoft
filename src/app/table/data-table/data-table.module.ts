import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {DataTableComponent} from './data-table.component';

@NgModule({
  declarations: [DataTableComponent],
  exports: [
    DataTableComponent
  ]
})

export class DataTableModule {}
