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
import { APP_ROUTING }         from '../app/app.routes';
import { FilterPipe }          from '../app/pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnfinishedComponent,
    FinishedComponent,
    AddComponent,
    DetailComponent,
    PlaceholderPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
