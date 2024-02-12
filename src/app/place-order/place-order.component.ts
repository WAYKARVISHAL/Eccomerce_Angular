import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent {
  constructor (private api:ApiService ,private router:Router){}

  saveAddress(formdata:any){
    this.api.place(formdata.value).subscribe((res:any)=>{
      console.log(res.order_id);
      this.router.navigate(['/order_det/'+res.order_id])
    })
    // console.log(formdata.value)
  }
}
