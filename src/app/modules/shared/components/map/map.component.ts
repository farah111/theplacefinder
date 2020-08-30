import {Component, AfterViewInit, ViewChild, ElementRef, OnInit, Input, SimpleChanges, OnChanges} from
    '@angular/core';
import {AgmMap, LazyMapsAPILoader} from '@agm/core';
import {PlacesService} from '../../../../core/services/places.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [LazyMapsAPILoader]
})
export class MapComponent implements OnInit {
  @ViewChild(AgmMap, {static: true}) public agmMap: AgmMap;
  lat: number;
  lng: number;
  @Input() highlightedPlace;
  @Input() zoom: number;
  @Input() places = [];
  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.getCurrentLocation();
    this.agmMap.triggerResize(true);
  }

  getCurrentLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        }
      });
    }
  }
  getLat() {
    return this.highlightedPlace ? this.highlightedPlace.geometry.location.lat : this.lat;
  }
  getLng() {
    return this.highlightedPlace ? this.highlightedPlace.geometry.location.lng : this.lng;
  }
  getPlaceDetails(place) {
    this.placesService.getPlaceDetails(place.place_id).subscribe(placeDetails => {
      place.place_details = placeDetails;
    });
  }
}
