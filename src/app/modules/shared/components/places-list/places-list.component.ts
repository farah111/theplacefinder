import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlacesService} from '../../../../core/services/places.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  @Input() title: string;
  @Input() places;
  @Output() selectPlace = new EventEmitter();
  timer;
  constructor() { }

  ngOnInit(): void {
  }

  onPlaceHover(place) {
    this.timer = setTimeout(() => {
      this.selectPlace.emit(place);
    }, 700);
  }
  onPlaceNotHovered() {
    clearTimeout(this.timer);
  }

}
