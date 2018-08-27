import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../service/logging.service';
import { AccountService } from '../service/account/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
    // console.log('Account status changed, new status: ', accountStatus);
  }

  constructor(private loggingService: LoggingService, private accountService: AccountService) { }

  ngOnInit() {
  }


}
