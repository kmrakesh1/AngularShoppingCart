import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productincart : any =[];
  constructor() { }

  addItem(itempush:any){
    this.productincart.push(itempush);
  }
  removeItem( itemdelete:any){
    this.productincart = this.productincart.filter((item:any)=> {
      console.log(item != itemdelete);
      return item != itemdelete});
    return this.productincart;
  }
  getItem(){
    return this.productincart;
  }
}
