import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../service/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus);
    // console.log('Account status changed, new status: ', accountStatus);
  }

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }


}
