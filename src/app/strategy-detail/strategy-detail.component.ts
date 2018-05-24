import { Component, Input, OnInit } from '@angular/core';

import { Strategy } from '../common/models';
import { StrategyService } from '../strategy.service';

@Component({
  selector: 'app-strategy-detail',
  templateUrl: './strategy-detail.component.html',
  styleUrls: ['./strategy-detail.component.css']
})
export class StrategyDetailComponent implements OnInit {

  @Input() strategy: Strategy;

  constructor(public strategyService: StrategyService) { }

  ngOnInit() {
    console.log(`StrategyDetail component initialized with strategy=${this.strategy.code}`);
  }

}
