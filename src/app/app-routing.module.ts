import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { ChartsComponent} from './charts/charts.component';
import { TabledataComponent } from './charts/tabledata/tabledata.component';

const routes: Routes = [
 { path: '', component: TabledataComponent },
 { path: 'etch', component: DataEntryComponent},
 { path: 'charts', component: ChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
