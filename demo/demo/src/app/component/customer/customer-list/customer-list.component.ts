import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerService} from "../../../service/customer.service";
import {CustomerType} from "../../../model/customer-type";
import {CustomerTypeService} from "../../../service/customer-type.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  temp: Customer = {};
  customerTypeId = 0;
  name = '';
  customerTypes: CustomerType[];
  page: string | number;

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService) {
    customerTypeService.getAll().subscribe(next => {
      this.customerTypes = next;
    })
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll() {
    return this.customerService.getAll().subscribe(next => {
      this.customers = next;
    })
  }

  delete(id: number) {
    if (id != null) {
      return this.customerService.deleteCustomer(this.temp.id).subscribe(next => {
        alert("Xóa thành công");
        this.getAll();
      })
    }
  }

  search() {
    if(this.customerTypeId){
      this.customerService.searchAll(this.name,this.customerTypeId).subscribe(next => {
        this.customers = next;
      })
    }else {
      this.customerService.searchName(this.name).subscribe(next => {
        this.customers = next;
      })
    }
  }
}
