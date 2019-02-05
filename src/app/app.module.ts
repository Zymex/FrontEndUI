import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { ChartsComponent } from './charts/charts.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TabledataComponent } from './charts/tabledata/tabledata.component';

@NgModule({
   declarations: [
      AppComponent,
      DataEntryComponent,
      ChartsComponent,
      TabledataComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
