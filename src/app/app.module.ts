import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { FormsModule }         from '@angular/forms';

import { AppComponent }        from './app.component';
import { HomeComponent }       from './components/home/home.component';
import { UnfinishedComponent } from './components/unfinished/unfinished.component';
import { FinishedComponent }   from './components/finished/finished.component';
import { ListService }         from './services/list.service';
import { AddComponent }        from './components/add/add.component';
import { DetailComponent }     from './components/detail/detail.component';
import { PlaceholderPipe }     from './pipes/placeholder.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnfinishedComponent,
    FinishedComponent,
    AddComponent,
    DetailComponent,
    PlaceholderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
