import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment/payment.service'
import { Payment } from '../payment/payment'
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers: [PaymentService]

})
export class DataComponent implements OnInit {
  payments: Payment[];
  // itemResource = new DataTableResource(this.payments);
  // items = [];
  // itemCount = 0;
  constructor(private paymentService: PaymentService) { 
    this.paymentService.getpayment()
    .subscribe(payments =>
      this.payments = payments);
      console.log(this.payments);
    // this.itemResource.count().then(count => this.itemCount = count);
  }


//   reloadItems(params) {
//     this.itemResource.query(params).then(items => this.items = items);
// }

  ngOnInit() {
    // console.log(this.payments);
    // this.paymentService.getpayment()
    //   .subscribe(payments =>
    //     this.payments = payments);
        // console.log(this.payments);
  }

  refund(refund) {
    var t_id = (refund.transaction_details.id);
    console.log(t_id);
    const data = {
      t_id: t_id
    }
    this.paymentService.refund(data)
      .subscribe(refund => {
        console.log(refund);
      })
  }
//   rowClick(rowEvent) {
//     console.log('Clicked: ' + rowEvent.row.item.name);
// }

// rowDoubleClick(rowEvent) {
//     alert('Double clicked: ' + rowEvent.row.item.name);
// }

// rowTooltip(item) { return item.jobTitle; }



}















