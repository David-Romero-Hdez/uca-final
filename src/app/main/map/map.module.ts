import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapViewComponent } from './map-view/map-view.component';
import { MapListComponent } from './map-list/map-list.component';
import { MapListItemComponent } from './map-list-item/map-list-item.component';
import { MapRoutingModule } from './map-routing.module';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    MapComponent,
    MapViewComponent,
    MapListComponent,
    MapListItemComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    AgmCoreModule
  ]
})
export class MapModule { }
