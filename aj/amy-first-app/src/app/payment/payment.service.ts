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
        return this.http.post('http://localhost:3000/pay', payment, { headers: headers }).map(res => res.json());
    }
   
     //retriving payments
    getpayment() {
    return this.http.get('http://localhost:3000/payment').map(res => res.json());
      
  }
     //refund
     refund(refund) {
     console.log('refund service called');
     var headers = new Headers();
     headers.append('Content-Type', 'application/json');
     return this.http.post('http://localhost:3000/refund', refund, { headers: headers }).map(res => res.json());
}
    

     //search
     search(searchemail) {
    //  console.log('search service calle');
    //  console.log(searchemail);
     var headers = new Headers();
     headers.append('Content-Type', 'application/json');
     return this.http.post('http://localhost:3000/search', searchemail , { headers: headers }).map(res => res.json());
}

    //plan retrive 
    getplan() {
    console.log('plan service calle');
    return this.http.get('http://localhost:3000/plan').map(res => res.json());
   
}
   
    //List subscriptions
    getsubscriptions() {
    // console.log('subscriptions service calle');
    return this.http.get('http://localhost:3000/subscriptions').map(res => res.json());  

}
    //retrive customer
    getcustomer() {
    // console.log('customer service calle');
    return this.http.get('http://localhost:3000/customer').map(res => res.json());  

}
    //subscriptions cancle
    subscriptionscancle(data) {
    console.log('subscriptionscancle service called');
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/subscriptionscancle', data, { headers: headers }).map(res => res.json());
}
    //subscriptions update
    subscriptionsupdate(data) {
    console.log('subscriptionsupdate service called');
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/subscriptionsupdate', data, { headers: headers }).map(res => res.json());
}

    //add reg form data
    addcontact(newRegistration) {
    console.log('addcontact service called');
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/regform',newRegistration,{ headers: headers }).map(res => res.json());
}
    //login user
    login(user) {
    console.log('login service called');
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/login',user,{ headers: headers }).map(res => res.json());
}


}