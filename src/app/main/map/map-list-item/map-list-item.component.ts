import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-list-item',
  templateUrl: './map-list-item.component.html',
  styleUrls: ['./map-list-item.component.scss']
})
export class MapListItemComponent implements OnInit {
  @Input() place: any
  constructor() { }

  ngOnInit(): void {
  }

}
