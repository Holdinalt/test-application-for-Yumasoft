import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {PassportsHandlerService} from '../passports-handler.service';
import {UnloadComponent} from './unload.component';

@NgModule({
  imports: [FormsModule, BrowserModule],
  declarations: [UnloadComponent],
  exports: [
    UnloadComponent,
  ],
  providers: [PassportsHandlerService]
})

export class UnloadModule {}
