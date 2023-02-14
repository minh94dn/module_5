import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customers?_sort=name&_order=asc")
  }

  saveCustomer(customer: any) {
    return this.httpClient.post<Customer[]>("http://localhost:3000/customers", customer)
  }

  deleteCustomer(id: number) {
    return this.httpClient.delete("http://localhost:3000/customers/" + id)
  }

  editCustomer(customer: Customer) {
    return this.httpClient.put<Customer>("http://localhost:3000/customers/" + customer.id, customer)
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>("http://localhost:3000/customers/" + id)
  }

  searchAll(nameSearch: string, customerTypeId: number): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customers?name_like=" + nameSearch + "&customerType.id=" + customerTypeId)
  }
  searchName(nameSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customers?name_like=" + nameSearch)
  }
}
