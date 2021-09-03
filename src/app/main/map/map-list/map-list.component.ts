import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/services/places.service';

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss']
})
export class MapListComponent implements OnInit {

  places!: any
  constructor(private readonly placeService: PlaceService) { }

  ngOnInit(): void {
    this.placeService.getAll().subscribe(data => {
      this.places = data
    });
  }


}
