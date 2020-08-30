import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  locationsSubject = new BehaviorSubject([]);
  $locations = this.locationsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getPlacesAutocomplete(location) {
    const httpParams = new HttpParams().set('input', location);
    return this.http.get('/autocomplete', {params: httpParams}).pipe(
      map(places => places['predictions']),
      tap((res: any) => this.locationsSubject.next(res))
    );
  }

  getPlacesSearch(query, type?) {
    let  httpParams = new HttpParams()
      .set('radius', '1500')
      .set('query', query.replace(',', '').replace(' ', '+'));
    if (type) {
      httpParams = httpParams.append('type', type);
    }
    return this.http.get('/search', {params: httpParams}).pipe(
      map(places => places['results']),
    );
  }

  getPlaceDetails(placeId) {
    const httpParams = new HttpParams().set('place_id', placeId).set('fields', 'name,rating,formatted_phone_number,photo,opening_hours');
    return this.http.get('/details', {params: httpParams}).pipe(
      map(placeDetails => placeDetails['result']),
    );
  }
}
