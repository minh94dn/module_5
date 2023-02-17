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

  constructor(private medicalRecordService: MedicalRecordService,) {


    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(){
    return this.medicalRecordService.getAll().subscribe(next => {
      this.medicalRecords = next;
    })
  }

  delete(id: number) {
    if(id != null){
      console.log(id);
      this.medicalRecordService.delete(this.temp.id).subscribe(next => {
        alert('Xóa thành công')
        this.getAll();
      })
    }
  }
}
