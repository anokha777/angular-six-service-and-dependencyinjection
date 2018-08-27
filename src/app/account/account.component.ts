import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from '../service/logging.service';
import { AccountService } from '../service/account/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  constructor(private loggingService: LoggingService, private accountService: AccountService) { }

  ngOnInit() {
  }

  @Input() account: {name: string, status: string};
  @Input() id: number;
 

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ',status);
  }
}
