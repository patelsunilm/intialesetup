import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PaymentService } from '../payment/payment.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  route: any;
  form: FormGroup;

constructor(private paymentService: PaymentService, private router: Router) { }

  ngOnInit() {

    this.form = new FormGroup({
      'first_name': new FormControl('', Validators.required), 
      'last_name': new FormControl('', Validators.required), 
      'email': new FormControl('', Validators.required), 
      'password': new FormControl('', Validators.required), 
      'birth': new FormControl('', Validators.required), 
      'mobile': new FormControl('', Validators.required), 

});

  }
  onAddUser(form){
    // console.log(this.form)
   var  newRegistration = (this.form.value);
   this.paymentService.addcontact(newRegistration)
  .subscribe(addcontact => {
    // console.log(newRegistration);
  });
   this.router.navigate(['/login'], { relativeTo: this.route });
   this.form.reset();
} 

}
 
