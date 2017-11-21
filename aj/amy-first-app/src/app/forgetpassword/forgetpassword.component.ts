import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentService, } from '../payment/payment.service'
import { FlashMessagesService, } from 'angular2-flash-messages';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  form: FormGroup;
  
  constructor(private paymentService: PaymentService, private router: Router, private route: ActivatedRoute, private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl('', Validators.required),
   });
 
  }
  ForgetUser(){
    var user = (this.form.value);
    console.log(user);
    this.paymentService.forgetpassword(user)
     .subscribe(forgetpassword => {
      //  console.log(forgetpassword);

     })
    //  this.form.reset();
  }
  
}
