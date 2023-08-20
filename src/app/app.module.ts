import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes =[
  {path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'products/:id',component:ProductComponent},
{path:'cart',component:CartComponent},
{path:'**', redirectTo:'home'}]

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
