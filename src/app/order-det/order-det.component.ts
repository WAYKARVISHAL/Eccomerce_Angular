import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-det',
  templateUrl: './order-det.component.html',
  styleUrls: ['./order-det.component.css']
})
export class OrderDetComponent implements OnInit {
  order_info:any;
  order_product:any;
constructor(private api:ApiService,private activatedroute:ActivatedRoute){}
ngOnInit(){
  this.activatedroute.params.subscribe((res:any)=>{
    this.api.order_det(res.order_id).subscribe((res2:any)=>{
      console.log(res2);
      this.order_info=res2.order_det[0];
      this.order_product=res2.order_products;
    });
  })

}
}
