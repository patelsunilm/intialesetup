import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers:[LoggingService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string ,status: string}>();
   
  constructor(private loggingService: LoggingService, 
              private accountServies: AccountsService){
    this.accountServies.statusUpdated.subscribe(
      (status: string ) => alert('new status: '+ status)
    );
    }
  
  onCreateAccount(accountName: string, accountStatus: string){
    this.accountServies.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus); 
  }

  }


