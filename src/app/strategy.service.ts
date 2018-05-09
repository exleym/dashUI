import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Strategy } from './common/models';
import { STRATEGIES } from './common/mock-strategies';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  constructor() { }

  getStrategies(): Observable<Strategy[]> {
    return of(STRATEGIES);
  }
}
