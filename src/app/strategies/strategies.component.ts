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
  selectedStrategy: Strategy;

  constructor(private strategyService: StrategyService) { }

  ngOnInit() {
    this.getStrategies();
    this.selectedStrategy = this.strategies[0];
  }

  getStrategies(): void {
    this.strategyService.getResources()
      .subscribe(strategies => this.strategies = strategies);
  }

  selectStrategy(strategy: Strategy) {
    console.log(`selecting strategy ${strategy.code}`);
    this.selectedStrategy = strategy;
    return false;
  }

}
