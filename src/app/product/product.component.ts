import { Component, OnInit } from '@angular/core';
import { ProductItemsService } from '../product-items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  errorMessage: any;
 constructor(private route:ActivatedRoute,public products:ProductItemsService,public cart:CartService, public router:Router){}
 productitemsdetail: any = {};
 ngOnInit(){
  let id = this.route.snapshot.params['id'];
  this.products.fetchproductdetail(id).subscribe((data)=>{
    this.productitemsdetail = data;
  },(error) => {
    this.errorMessage = error;
  }
  );
}
addtocart(){
  window.alert('The product has been Added!');
  let id = this.route.snapshot.params['id'];
  this.cart.addItem(id)
  this.router.navigate(['/home']);
}
}
