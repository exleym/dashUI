import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

import { Resource, Tag } from '../common/models';
import { ResourceService } from '../resource-service-interface';


@Component({
  selector: 'app-tags-component',
  templateUrl: './tags-component.component.html',
  styleUrls: ['./tags-component.component.css']
})
export class TagsComponentComponent implements OnInit, OnChanges {

  @Input() resource: Resource;
  @Input() resourceService: ResourceService;
  tags: Tag[];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes = [ENTER, COMMA];

  constructor() { }

  ngOnInit() {
    this.getTags();
  }

  ngOnChanges() {
    this.getTags();
  }

  getTags(): void {
    console.log(`getTags called with resourceId=${this.resource.id}`);
    this.resourceService.getResourceTags(this.resource)
      .subscribe(tags => this.tags = tags);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value: string = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.tags.push({ name: value.trim(), id: null, accounts: null });
      this.resourceService.tagResource(this.resource, value.trim()).subscribe();
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.resourceService.untagResource(this.resource, tag).subscribe();
    }
  }

}
