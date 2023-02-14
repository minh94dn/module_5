import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {ContractListComponent} from "./component/contract/contract-list/contract-list.component";
import {EmployeeListComponent} from "./component/employee/employee-list/employee-list.component";
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";
import {FacilityCreateComponent} from "./component/facility/facility-create/facility-create.component";
import {FacilityEditComponent} from "./component/facility/facility-edit/facility-edit.component";




const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'facility', component: FacilityListComponent},
  {path: 'facility/create', component: FacilityCreateComponent},
  {path: 'facility/edit/:id', component: FacilityEditComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/edit/:id', component: CustomerEditComponent},
  {path: 'contract', component: ContractListComponent},
  {path: 'employee', component: EmployeeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
