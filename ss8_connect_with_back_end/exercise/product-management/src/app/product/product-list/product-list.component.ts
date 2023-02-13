import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";
import {element} from "protractor";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categorys: Category[] = [];
  temp: Product = {};
  id: number;
  constructor(private productService: ProductService, private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(next => {
      this.categorys = next;
    })
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    return this.productService.getAll().subscribe(next => {
      this.products = next;
    });
  }

  //
  // deleteModal(id: number, name: string) {
  //   this.idDelete = id;
  //   this.nameDelete = name;
  // }

  delete(idDelete: number) {
    if (idDelete != null) {
      return this.productService.deleteProduct(this.temp.id).subscribe(data => {
        alert('Xoa thanh cong');
        this.getAll();
      })
    }
  }

  findByCategory(event: string) {
    if(!(isNaN(parseInt(event)))) {
      this.productService.findByCategory(parseInt(event)).subscribe(next => {
        this.products = next;
      })
    } else {
      this.productService.getAll().subscribe(next => {
        this.products = next;
      })
    }

  }
}
