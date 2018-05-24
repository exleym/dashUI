import { Component, Input, OnInit } from '@angular/core';

import { Account } from '../common/models';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  @Input() account: Account;

  constructor(public accountService: AccountService) { }

  ngOnInit() {
    console.log(`AccountDetail component initialized with account=${this.account.code}`);
  }

}
