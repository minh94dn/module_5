import {Component, OnInit} from '@angular/core';
import {Facility} from "../../../model/facility";
import {FacilityService} from "../../../service/facility.service";
import {RentTypeService} from "../../../service/rent-type.service";
import {FacilityTypeService} from "../../../service/facility-type.service";


@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilitys: Facility[] = [];
  temp: Facility = {};

  constructor(private facilityService: FacilityService,
              private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll() {
    return this.facilityService.getAll().subscribe(next => {
      console.log(next)
      this.facilitys = next;
    })
  }

  delete(id: number) {
    if (id != null) {
      return this.facilityService.deleteFacility(this.temp.id).subscribe(next => {
        alert('Xóa thành công');
        this.getAll();
      })
    }
  }
}
