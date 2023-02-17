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
  benhAnForm: FormGroup = new FormGroup({
    id: new FormControl(),
    idBenhNhan: new FormControl(),
    tenBenhNhan: new FormControl('', [Validators.required, Validators.pattern('\\D{1,}')]),
    ngayNhapVien: new FormControl('', [Validators.required]),
    ngayRaVien: new FormControl('', [Validators.required]),
    lyDo: new FormControl('', [Validators.required]),
    phuongPhap: new FormControl('', [Validators.required]),
    bacSy: new FormControl('', [Validators.required]),
  },[this.validateDateEnd]
  );




  id: number;

  constructor(private benhAnService: MedicalRecordService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      let id = next.get('id');
      if (id != null) {
        this.benhAnService.findById(parseInt(id)).subscribe(next => {
          this.benhAnForm.patchValue(next);
        });
      }
    });
  }

  ngOnInit(): void {

  }

  editBenhAn(id: any) {
    const benhAn = this.benhAnForm.value;
    this.benhAnService.editBenhAn(benhAn).subscribe(next => {
      alert('Chỉnh sủa thành công');
      this.router.navigateByUrl('benhAn');
    });
  }

  validateDateEnd(control: FormGroup) {
    let ngayNhapVien = control.controls.ngayNhapVien.value;
    let ngayRaVien = control.controls.ngayRaVien.value;
    return (new Date(ngayNhapVien) >= new Date(ngayRaVien)) ? {'invalidDate': true} : null;
  }
}
