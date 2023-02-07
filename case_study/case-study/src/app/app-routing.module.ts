import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {FacilityListComponent} from "./facility/facility-list/facility-list.component";
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {ContractListComponent} from "./component/contract/contract-list/contract-list.component";
import {EmployeeListComponent} from "./component/employee/employee-list/employee-list.component";




const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'facility', component: FacilityListComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'contract', component: ContractListComponent},
  {path: 'employee', component: EmployeeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
