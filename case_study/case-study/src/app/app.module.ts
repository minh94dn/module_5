import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './component/footer/footer.component';
import {HeaderComponent} from './component/header/header.component';
import {HomeComponent} from './component/home/home.component';
import {BodyComponent} from './component/body/body.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { FacilityAddComponent } from './facility/facility-add/facility-add.component';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { ContractListComponent } from './component/contract/contract-list/contract-list.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    BodyComponent,
    FacilityListComponent,
    FacilityEditComponent,
    FacilityAddComponent,
    EmployeeListComponent,
    CustomerListComponent,
    ContractListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
