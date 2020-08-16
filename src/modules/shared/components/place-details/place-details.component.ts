import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss']
})
export class PlaceDetailsComponent implements OnInit {
  @Input() placeDetails;
  key = environment.key;
  constructor(protected sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getPhotoUrl(photoReference) {
      const url = `https://maps.googleapis.com/maps/api/place/photo?maxheight=200&maxwidth=200&photoreference=${photoReference}&key=${this.key}`;
      return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
