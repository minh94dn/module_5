import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../model/customer-type";
import {CustomerService} from "../../../service/customer.service";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    customerType: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    dateOfBirth: new FormControl('', [Validators.required]),
    gender: new FormControl(),
    idCard: new FormControl('', [Validators.required, Validators.pattern('(\\d{9}|\\d{12})')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('(0|[(]84[)][+])9[01]\\d{7}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
  });
  customerTypeList: CustomerType[] = [];
  checkInput: false;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    })
  }

  ngOnInit(): void {
  }

  saveCustomer() {
    if (this.customerForm.valid) {
      this.customerService.saveCustomer(this.customerForm.value).subscribe(next => {
        alert('Thêm mới thành công');
        this.router.navigateByUrl("customer");
      })
    } else {
       // @ts-ignore
      this.checkInput = true;
    }
  }
}
