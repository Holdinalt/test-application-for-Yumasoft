import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UnloadComponent} from './unload/unload.component';
import {EditTableComponent} from './edit-table/edit-table.component';
import {DataInputComponent} from './data-input/data-input.component';

const routes: Routes = [
  {path: '', component: DataInputComponent},
  {path: 'data-edit', component: EditTableComponent},
  {path: 'unload', component: UnloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
