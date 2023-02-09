import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  idDelete: number;
  nameDelete: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
   return  this.products = this.productService.getAll();
  }

  deleteModal(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  delete(idDelete: number) {
    this.productService.deleteProduct(idDelete);
  }
}
