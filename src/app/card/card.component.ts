import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  implements OnInit {
  cartproduct:any;
  total=0;
constructor(private api:ApiService){}
ngOnInit(){
  this.api.cart_list().subscribe((res:any)=>{
    console.log(res);
    this.cartproduct=res;
    this.total=0;
    for(var i=0;i<this.cartproduct.length;i++){
     this.total += this.cartproduct[i].qty * this.cartproduct[i].price;
      
    }
  })
}
incQty(product_econ_cart_id:any){
  this.api.inc_cart_qty(product_econ_cart_id).subscribe((res:any)=>{
    console.log(res);
    this.ngOnInit();
  })
}
decqty(product_econ_cart_id:any){
  this.api.dec_cart_qty(product_econ_cart_id).subscribe((res:any)=>{
    console.log(res);
    this.ngOnInit();
  })
}

}
