import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MedicalRecordService} from '../../../server/medical-record.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  medicalRecordForm: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl(),
    codePatient: new FormControl(),
    namePatient: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    reason: new FormControl(),
    treatments: new FormControl(),
    nameDoctors: new FormControl(),
  });

  constructor(private medicalRecordService: MedicalRecordService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  createBenhAn() {
    this.medicalRecordService.add(this.medicalRecordForm.value).subscribe(next => {
      alert('Thêm mới thành công');
      this.router.navigateByUrl('BenhAns');
    });
  }
}
