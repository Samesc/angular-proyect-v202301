import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FristPageComponent } from './frist-page/frist-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FristPageComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
