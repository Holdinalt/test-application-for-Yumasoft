import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {PassportHandlerService} from '../passport-handler.service';
import {UnloadComponent} from './unload.component';

@NgModule({
  imports: [FormsModule, BrowserModule],
  declarations: [UnloadComponent],
  exports: [
    UnloadComponent,
  ],
  providers: [PassportHandlerService]
})

export class UnloadModule {}
