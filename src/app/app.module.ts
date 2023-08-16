import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { sortStringPipe } from './pipes/sortString.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipeComponent,
    sortStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
