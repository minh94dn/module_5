import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MedicalRecordService} from '../../../server/medical-record.service';
import {Router} from '@angular/router';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  medicalRecordForm: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl('', [Validators.required]),
    codePatient: new FormControl(),
    namePatient: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    reason: new FormControl(),
    treatments: new FormControl(),
    nameDoctors: new FormControl(),
  });

  codeError: string;
  nameDoctorsError: string;

  constructor(private medicalRecordService: MedicalRecordService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  createBenhAn() {
    this.codeError = "";
    this.nameDoctorsError = "";
    if(this.medicalRecordForm.valid){
      this.medicalRecordService.add(this.medicalRecordForm.value).subscribe(next => {
        alert('Thêm mới thành công');
        this.router.navigateByUrl('benhAn');
    }, error => {
      for (let i = 0; i < error.error.length; i++) {
        if (error.error[i].field === 'code') {
          this.codeError = error.error[i].defaultMessage;
        }
        if (error.error[i].field === 'nameDoctors') {
          this.nameDoctorsError = error.error[i].defaultMessage;
        }
      }
      console.log(error);
      alert('lõi');
    });
  }
}}
