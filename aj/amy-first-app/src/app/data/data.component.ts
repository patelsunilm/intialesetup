import { Component, OnInit } from '@angular/core';

import { DataTableResource,} from 'angular-4-data-table-bootstrap-4';
import { PaymentService } from '../payment/payment.service'
import { Payment } from '../payment/payment'


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
 

})
export class DataComponent implements OnInit {
  transations = [];
  payments: Payment[];
  itemResource;
  items = [];
  itemCount = 5;
  check = false;

  page_number = 0;
  email: String = '';
  amount: Number;
 
  constructor(private paymentService: PaymentService) {
    this.paymentService.getpayment().subscribe(transations => {
      this.itemResource = new DataTableResource(transations);
      this.reloadItems(10);
      this.itemResource.count().then(count => this.itemCount = count);
      // console.log(this.transations);

    });
  }


  reloadItems(params) {
    this.itemResource.query(params).then(items => this.items = items);
  }

  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent) {
     alert('Double clicked: ' + rowEvent.row.item.name);
    console.log('Double clicked: ' + rowEvent.row.item.name);
  }
  rowTooltip(item) { return item.jobTitle; }

  search(){
    // console.log()
     const searchemail = {
       email : this.email,
       amount: this.amount
       
     }
     console.log(searchemail)
     this.paymentService.search(searchemail).
      subscribe(Payments => {
        // this.payments.push(Payments);
        console.log(Payments);
        this.itemResource = new DataTableResource(Payments);
        this.reloadItems(10);
      })
    }  
  
  
  ngOnInit() {
    console.log(this.payments);
    this.paymentService.getpayment()
      .subscribe(payments =>
        this.payments = payments);
       console.log(this.payments);

    this.itemResource.count().then(count => {
      this.itemCount = count
      console.log(this.itemCount);
    });
  }

  refund(itemResource) {
    this.check = true;
    var t_id = (itemResource.transaction_details.id);
    console.log(itemResource);
      const data = {
        t_id: t_id
     }
      this.paymentService.refund(data)
       .subscribe(refund => {
         console.log(refund);
         this.check = false;
         
       })
  }
  
  show() {
    // console.log(this.transations);
  }
  
  
 
  }















