import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerType} from "../../../model/customer-type";
import {CustomerService} from "../../../service/customer.service";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    customerType: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
  });
  customerTypeList: CustomerType[] = [];
  id: number;

  compareWith(o1: CustomerType, o2: CustomerType) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.customerService.findById(parseInt(id)).subscribe(next => {
          this.customerForm.patchValue(next);
        })
      }
    })
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    })
  }

  ngOnInit(): void {
  }

  editCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.editCustomer(customer).subscribe(next => {
      alert("Chỉnh sửa thành công")
      this.router.navigateByUrl("customer")
    })
  }
}
