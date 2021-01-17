import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TableComponent} from './table/table.component';
import {DataEditComponent} from './data-edit/data-edit.component';
import {UnloadComponent} from "./unload/unload.component";

const routes: Routes = [
  {path: '', component: TableComponent},
  {path: 'data-edit', component: DataEditComponent},
  {path: 'unload', component: UnloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
