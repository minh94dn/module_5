import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MedicalRecord} from '../model/medical-record';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(numberPage: number ): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/benhAns?page=' + numberPage);
  }

  delete(id: number) {
    return this.httpClient.delete('http://localhost:8080/benhAns/delete/' + id);
  }

  add(medicalRecord: MedicalRecord) {
    return this.httpClient.post('http://localhost:8080/benhAns/add', medicalRecord);
  }

  findById(id: number): Observable<MedicalRecord[]> {
    return this.httpClient.get<MedicalRecord[]>('http://localhost:8080/benhAns/' + id);
  }

  editBenhAn(medicalRecord: MedicalRecord) {
    return this.httpClient.put('http://localhost:8080/benhAns/edit', medicalRecord);
  }
}
