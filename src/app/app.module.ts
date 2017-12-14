import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UnfinishedComponent } from './components/unfinished/unfinished.component';
import { FinishedComponent } from './components/finished/finished.component';
import { ListService }       from './services/list.service';

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
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
