import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Facility} from "../model/facility";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>("http://localhost:3000/facilitys")
  }

  saveFacility(facility: any) {
    return this.httpClient.post<Facility[]>("http://localhost:3000/facilitys", facility)
  }

  deleteFacility(id: number) {
    return this.httpClient.delete("http://localhost:3000/facilitys/" + id)
  }
}
