import {Category} from "./category";

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  start?: string;
  end?: string;
  description?: string;
  category?: Category;
}
