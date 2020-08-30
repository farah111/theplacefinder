import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MapComponent } from './components/map/map.component';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../../../environments/environment';
import { SearchFormComponent } from './components/search-form/search-form.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PlaceDetailsComponent } from './components/place-details/place-details.component';
import { CardComponent } from './components/card/card.component';
import { PlacesListComponent } from './components/places-list/places-list.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [PageNotFoundComponent, MapComponent, SearchFormComponent, PlaceDetailsComponent, CardComponent, PlacesListComponent, SpinnerComponent, HeaderComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.key
    }),
    MatSelectModule,
    PerfectScrollbarModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ], exports: [MapComponent, SearchFormComponent, CardComponent, PlacesListComponent, HeaderComponent]
})
export class SharedModule { }
