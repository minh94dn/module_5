import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
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
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });

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
