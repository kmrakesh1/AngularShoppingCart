import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductItemsService {

  constructor(private http:HttpClient) { }
  datain: any = [];
  fetchproducts():Observable<any>{
     return this.http.get('https://fakestoreapi.com/products')
  }
 
  fetchproductdetail(id:any):Observable<any>{
    return this.http.get('https://fakestoreapi.com/products/'+id);
 }

 fetchcategories():Observable<any>{
  return this.http.get('https://fakestoreapi.com/products/categories')
}
fetchproductbycategories(category:any):Observable<any>{
  return this.http.get('https://fakestoreapi.com/products/category/'+category);
}
}
