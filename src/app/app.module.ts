import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UnfinishedComponent } from './components/unfinished/unfinished.component'
import { FinishedComponent } from './components/finished/finished.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnfinishedComponent,
    FinishedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
