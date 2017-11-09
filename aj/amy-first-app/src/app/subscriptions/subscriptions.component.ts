import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment/payment.service'
import { Pipe } from '@angular/core';


@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  payments = [];
  day = true;
  month = true;
  
  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.getsubscriptions().subscribe(payments => {
      this.payments = payments.data;
      console.log(this.payments);
      
    })
  }
  subscriptionscancle(index){
    // console.log(this.payments[index]);
    // console.log(this.payments[index].customer );
   var st = (this.payments[index].id ).toString();
   console.log(st)
   const data = {
     st:st
   }
   this.paymentService.subscriptionscancle(data)
   .subscribe(subscriptionscancle => {
     console.log(subscriptionscancle)
   })
  }
  
  subscriptionsupdate(index){
    // console.log(this.payments[index]);
    // console.log(this.payments[index].customer );
   var st = (this.payments[index].id ).toString();
   console.log(st)
   const data = {
     st:st
   }
   this.paymentService.subscriptionsupdate(data)
   .subscribe(subscriptionsupdate => {
     console.log(subscriptionsupdate)
   })
  }

}


// refund(itemResource) {
//   this.check = true;
//   var t_id = (itemResource.transaction_details.id);
//   console.log(itemResource);
//     const data = {
//       t_id: t_id
//    }
//     this.paymentService.refund(data)
//      .subscribe(refund => {
//        console.log(refund);
//        this.check = false;
       
//      })
// }