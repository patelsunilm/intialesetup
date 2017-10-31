import { Component, OnInit } from '@angular/core';
import { Route,RouterModule, Router} from '@angular/router'
import { PaymentService } from './payment.service';
import { Payment } from './payment';

@Component({  
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paybutton: boolean = true;
  
  title = 'app'
  payment: Payment[];
  contact: Payment; 
  card_number: number = null;
  exp_month: number = null;
  exp_year: number = null;
  cvc: number = null; 
  amount: number = null;
  email: string = '';
  description: string = 'Recipe Shopping';
  
 constructor(private paymentService: PaymentService, private router: Router) { }

 ngOnInit() {
    
    var self = this;
    var billamount = localStorage.getItem('billamount');
    var amount = + billamount * 100;
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_EPzmSj2c4ch3eXNPUrWldfyr',
      locale: 'auto',
      token: function (token: any) {
        
        var token_id = token.id;
        var email = token.email;
        self.paybutton = false;
        
        const payment = {
          email: email,
          token_id: token_id,
          amount: amount,
          description: self.description
        }
        self.paymentService.pay(payment).subscribe(result => {
          // console.log(result);
          // localStorage.setItem('msg', JSON.stringify(result));

          self.amount = null;
          self.email = '';
          self.description = '';
          self.router.navigate(['/']);
        });
      }
    });

    handler.open({
      name: 'My Payment Gateway',
      description: 'Recipe Shopping',
      amount: amount
    });

  }

}



  


  