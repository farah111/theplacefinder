import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Types} from '../../../../../types';
import {PlacesService} from '../../../../core/services/places.service';
import {debounceTime, map, tap} from 'rxjs/operators';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() searchCriteriaChanged = new EventEmitter();
  types = Types.types;
  searchForm = new FormGroup({
    location: new FormControl(''),
    type: new FormControl(''),
  });
  constructor(public placesService: PlacesService) { }

  ngOnInit(): void {
    this.searchForm.get('location').valueChanges.pipe(
      map(value => value.replace(' ', '+')),
      debounceTime(500)).
      subscribe(value => {
        this.placesService.getPlacesAutocomplete(value).subscribe();
    });
  }

  onSearchCriteriaChanged() {
    this.searchCriteriaChanged.emit(this.searchForm.value);
  }

}
