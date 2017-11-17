import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentService, } from '../payment/payment.service'
import { FlashMessagesService, } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // route: any;
  // router: any;
  loading = false;
  form: FormGroup;

  constructor(private paymentService: PaymentService, private router: Router, private route: ActivatedRoute, private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    });
  }

  LoginUser() {
    var user = (this.form.value);
    this.paymentService.login(user)
      .subscribe(login => {
        if (login.error) {
          var a = login.error;
          this.flashMessagesService.show(a, { cssClass: 'alert-danger' });
        }
        // console.log(login);
        else{
          var a = login.msg;
          this.flashMessagesService.show(a, { cssClass: 'alert-success' });
          this.router.navigate(['/recipes'], { relativeTo: this.route });
        }
     
      });
  }
}

  //   this.form.reset();




