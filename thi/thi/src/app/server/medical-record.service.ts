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

  // @ts-ignore
  getAll(): Observable<MedicalRecord[]> {
    return this.httpClient.get<MedicalRecord[]>('http://localhost:8080/benhAns');
  }

  delete(id: number) {
    return this.httpClient.delete('http://localhost:8080/benhAns/delete/' + id);
  }

  add(medicalRecord: MedicalRecord) {
    return this.httpClient.post('http://localhost:8080/benhAns', medicalRecord);
  }

  findById(id: number): Observable<MedicalRecord[]> {
    return this.httpClient.get<MedicalRecord[]>('http://localhost:3000/benhAns/' + id);
  }

  editBenhAn(benhAn: MedicalRecord) {
    return this.httpClient.put<MedicalRecord>('http://localhost:3000/benhAns', benhAn);
  }
}
