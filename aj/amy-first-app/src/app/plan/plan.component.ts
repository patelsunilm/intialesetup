import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment/payment.service'
import { DataTableResource,} from 'angular-4-data-table-bootstrap-4';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  payments = [];
  transations = [];
  itemResource;
  items = [];
  itemCounts = 5;
  
  constructor(private paymentService: PaymentService) {
  
       this.paymentService.getplan().subscribe(transations => {
        this.itemResource = new DataTableResource(transations.data);
        this.reloadItems(10);
         this.itemResource.count().then(count => this.itemCounts = count);
       })
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

  ngOnInit() {
    this.paymentService.getplan().subscribe(Payments => {
      this.payments = Payments.data;
      console.log(this.payments);
    });
   }
  
}


