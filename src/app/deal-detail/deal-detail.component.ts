import { Component, Input, OnInit } from '@angular/core';

import { Deal } from '../common/models';
import { DealService } from '../deal.service';

@Component({
  selector: 'app-deal-detail',
  templateUrl: './deal-detail.component.html',
  styleUrls: ['./deal-detail.component.css']
})
export class DealDetailComponent implements OnInit {

  @Input() deal: Deal;

  constructor(public dealService: DealService) { }

  ngOnInit() {
    console.log(`DealDetail component initialized with deal=${this.deal.code}`);
  }

}
