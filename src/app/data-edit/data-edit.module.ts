
import { NgModule } from '@angular/core';
import {DataEditComponent} from './data-edit.component';
import {EditTableModule} from './edit-table/edit-table.module';


@NgModule({
  declarations: [
    DataEditComponent,

  ],
  imports: [
    EditTableModule
  ],
  exports: [DataEditComponent],
  providers: []
})
export class DataEditModule { }
