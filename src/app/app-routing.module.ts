import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportTypeComponent } from './components/report-type/report-type.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'report-types', component: ReportTypeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
