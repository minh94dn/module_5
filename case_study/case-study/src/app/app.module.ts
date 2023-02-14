import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './component/footer/footer.component';
import {HeaderComponent} from './component/header/header.component';
import {HomeComponent} from './component/home/home.component';
import {BodyComponent} from './component/body/body.component';
import {EmployeeListComponent} from './component/employee/employee-list/employee-list.component';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';
import {ContractListComponent} from './component/contract/contract-list/contract-list.component';
import {FacilityCreateComponent} from './component/facility/facility-create/facility-create.component';
import {CustomerCreateComponent} from './component/customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './component/customer/customer-edit/customer-edit.component';
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    BodyComponent,
    EmployeeListComponent,
    CustomerListComponent,
    ContractListComponent,
    FacilityCreateComponent,
    FacilityListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
