import { Component, OnInit } from '@angular/core';

import { Strategy } from '../common/models';
import { StrategyService } from '../strategy.service';

@Component({
  selector: 'app-strategies',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.css']
})
export class StrategiesComponent implements OnInit {

  strategies: Strategy[];

  constructor(private strategyService: StrategyService) { }

  ngOnInit() {
    this.getStrategies();
  }

  getStrategies(): void {
    this.strategyService.getStrategies()
      .subscribe(strategies => this.strategies = strategies);
  }

}
