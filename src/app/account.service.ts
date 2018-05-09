import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Account } from './common/models';
import { ACCOUNTS } from './common/mock-accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAccounts(): Observable<Account[]> {
    return of(ACCOUNTS);
  }
}
