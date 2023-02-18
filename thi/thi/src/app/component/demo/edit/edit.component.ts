import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MedicalRecordService} from '../../../server/medical-record.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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

  id: number;
  constructor(private medicalRecordService: MedicalRecordService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      let id = next.get('id');
      if (id != null) {
        this.medicalRecordService.findById(parseInt(id)).subscribe(next => {
          this.medicalRecordForm.patchValue(next);
        });
      }
    });
  }

  ngOnInit(): void {

  }

  editBenhAn() {
    const medicalRecord = this.medicalRecordForm.value;
    this.medicalRecordService.editBenhAn(medicalRecord).subscribe(next => {
      alert('Chỉnh sủa thành công');
      this.router.navigateByUrl('benhAn');
    });
  }

}
