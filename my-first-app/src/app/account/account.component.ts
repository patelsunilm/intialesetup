import { Component,Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 // providers:[LoggingService]
})
export class AccountComponent{
   @Input() account: {name: string, status:string};
   @Input() id:number;
   
  
   constructor(private loggingService: LoggingService,
               private accountServies: AccountsService){}

  onSetTo( status: string) {
     this.accountServies.updateStatus(this.id, status);
     //console.log('a server status changed new status ' + status);
     this.accountServies.statusUpdated.emit(status);
  }

}
