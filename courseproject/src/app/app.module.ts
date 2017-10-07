import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { FillterPipe } from './fillter.pipe';
 
@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FillterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
