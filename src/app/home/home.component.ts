import { Component } from '@angular/core';
import { ProductItemsService } from '../product-items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  errorMessage: any;
  constructor(public products: ProductItemsService) { }
  productitems: any = {};
  productitemscategories: any = {};
  ngOnInit() {
    this.loadallproduct();
    this.products.fetchcategories().subscribe((datacat) => {
      this.productitemscategories = datacat;
    });

  }
  loadallproduct(){
    this.products.fetchproducts().subscribe((data) => {
      this.productitems = data;
    }, (error) => {
      this.errorMessage = error;
    }
    );
  }
  changecategories(cate: any) {
    let selectedItem = cate.target.value;
    if(selectedItem == "Select"){
      this.loadallproduct();
    }else{
      this.products.fetchproductbycategories(selectedItem).subscribe((data) => {
        this.productitems = data;
  
      });
    }
   
  }
}
