import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('',[Validators.required]),
    price: new FormControl(),
    start: new FormControl(),
    end: new FormControl('',[Validators.required, Validators.pattern('^(19|20)\\d\\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$')]),
    description: new FormControl(),
    category: new FormControl(),
  }, [this.validateDateEnd,this.validateDateStart]);

  category: Category[] = [];

  constructor(private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(next =>{
      this.category = next;
    });
  }
  validateDateEnd(control: FormGroup) {
     let start = control.controls.start.value;
     let end = control.controls.end.value;
    return (new Date(start) >= new Date(end)) ? {'invalidDate': true} : null;
  }

  validateDateStart(control: FormGroup) {
    let start = control.controls.start.value;
    let today = Date.now();
    return (new Date(start) <= new Date(today)) ? {'today': true} : null;
  }

  saveProduct() {
    if(this.productForm.valid){
      this.productForm.value.id = parseInt(this.productForm.value.id);
      const temp = this.productService.saveProduct(this.productForm.value).subscribe(next => {
        alert("thêm mới thành công");
        this.router.navigateByUrl("product/list")
      })
    }
  }
}
