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
  temp: Product = {};

  constructor(private productService: ProductService) {
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
}
