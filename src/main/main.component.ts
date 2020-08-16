import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../core/services/places.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  searchedPlace;
  suggestedPlaces = [];
  constructor(private placesService: PlacesService) { }

  ngOnInit() {
  }

  searchCriteria(searchCriteria) {
    this.placesService.
    getPlacesSearch(searchCriteria.location, searchCriteria.type !== '' ? searchCriteria.type : null)
      .subscribe(results => {
        this.suggestedPlaces = results;
        if (results.length > 0) {
          this.searchedPlace = results[0];
        }
      });
  }

  selectPlace(place) {
    this.searchedPlace = place;
  }

}
