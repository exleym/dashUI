import { Component, OnInit } from '@angular/core';

import { Deal } from '../common/models';
import { DealService } from '../deal.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  deals = [];
  selectedDeal: Deal;

  constructor(private dealService: DealService) { }

  ngOnInit() {
    this.getDeals();
    this.selectedDeal = this.deals[0];
  }

  getDeals(): void {
    this.dealService.getResources()
      .subscribe(deals => this.deals = deals);
    console.log(this.deals);
  }

  selectDeal(deal: Deal) {
    console.log(`selecting deal ${deal.code}`);
    this.selectedDeal = deal;
    return false;
  }
}
