import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Payment } from './payment';

import 'rxjs';

@Injectable()
export class PaymentService {
    
    constructor(private http: Http) { }

    pay(payment) {
        console.log('service call');
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/pay', payment, { headers: headers }).map(res => res.json());
    }
    //retriving Contacatsercice
      getpayment() {
       return this.http.get('http://localhost:5000/payment').map(res => res.json());
      
  }
     refund(refund) {
     console.log('refund service called');
     var headers = new Headers();
     headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/refund', refund, { headers: headers }).map(res => res.json());
}




}
