import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductItemsService } from '../product-items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartproductitems:any =[];
  error:any;
  
constructor(public cartitem:CartService,public products:ProductItemsService){}
ngOnInit(): void {
  this.loadcartdata();
}
loadcartdata(){
  var cartId = this.cartitem.getItem();
  if(cartId.length== 0){
     this.error = "No cart Items";
  } else {
   cartId.forEach((id:any) => { this.products.fetchproductdetail(id).subscribe((data)=>{
     this.cartproductitems.push(data);
     return this.cartproductitems;
   });})
  }
}
removeItem(item:any){
var removeid = item.id;
this.cartitem.removeItem(removeid);
window.alert('The product has been Removed!');
this.refreshitem();
}
refreshitem(){
  this.cartproductitems = [];
  this.loadcartdata();
}
}
