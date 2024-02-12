import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrderDetComponent } from './order-det/order-det.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CategoryProductsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MyOrderComponent,
    NavbarComponent,
    ProductInfoComponent,
    ProfileComponent,
    RegisterComponent,
    PlaceOrderComponent,
    OrderDetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
