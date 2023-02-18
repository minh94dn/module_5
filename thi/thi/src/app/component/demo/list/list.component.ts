import { Component, OnInit } from '@angular/core';
import {MedicalRecord} from '../../../model/medical-record';
import {MedicalRecordService} from '../../../server/medical-record.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  medicalRecords: MedicalRecord[] = [];
  temp: MedicalRecord={};

  numberPage: number;
  totalPage: number;
  first: boolean;
  last: boolean;

  constructor(private medicalRecordService: MedicalRecordService,) {


    this.getAll(this.numberPage);
  }

  ngOnInit(): void {
  }

  getAll(numberPage: number){
    return this.medicalRecordService.getAll(numberPage).subscribe(next => {
      console.log(next);
      this.medicalRecords = next.content;
      this.numberPage = next.number;
      this.totalPage = next.totalPages;
      this.first = next.first;
      this.last = next.last;
    })
  }

  delete(id: number) {
    if(id != null){
      console.log(id);
      this.medicalRecordService.delete(this.temp.id).subscribe(next => {
        alert('Xóa thành công')
        this.getAll(this.numberPage);
      })
    }
  }
}
