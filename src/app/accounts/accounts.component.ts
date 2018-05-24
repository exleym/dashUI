import { Component, OnInit } from '@angular/core';

import { Account } from '../common/models';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts = [];
  selectedAccount: Account;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getAccounts();
    this.selectedAccount = this.accounts[0];
  }

  getAccounts(): void {
    this.accountService.getResources()
      .subscribe(accounts => this.accounts = accounts);
    console.log(this.accounts);
  }

  selectAccount(account: Account) {
    console.log(`selecting account ${account.code}`);
    this.selectedAccount = account;
    return false;
  }
}
