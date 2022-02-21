import { Component } from '@angular/core';
import { CountriesApiService } from '../../services/countries-api.service';
import { Observable } from 'rxjs';
import { Country } from '../../models/country.model';
import { Countries } from '../../models/countries.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent {
  public countries$: Observable<Countries> = this.countriesApiService.getCountries$();
  public selectedCountry: Country = null;

  constructor(private readonly countriesApiService: CountriesApiService) {}
}
