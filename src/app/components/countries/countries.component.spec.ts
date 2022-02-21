import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { CountriesComponent } from './countries.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { CountriesApiService } from '../../services/countries-api.service';
import { Countries } from '../../models/countries.model';

describe('[CountriesComponent] Test Suite', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;
  const mockCountryData = {
    name: 'Wales',
    population: '350000',
    Alpha3Code: '1337',
  };

  const mockCountriesApiService = {
    getCountries$: () => of([mockCountryData]),
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CountriesComponent],
        imports: [HttpClientModule],
        providers: [{ provide: CountriesApiService, useValue: mockCountriesApiService }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create [CountriesComponent]', () => {
    expect(component).toBeTruthy();
  });

  it('[Countries$] should be initialised on construction with mock values', done => {
    component.countries$.subscribe((countries: Countries) => {
      expect(countries).toContain(mockCountryData);
      done();
    });
  });

  it('[Selected] should contain list index country name on DOM mousedown', fakeAsync(() => {
    expect(component.selectedCountry).toBeNull();
    fixture.debugElement.nativeElement.querySelector('li').click();
    tick();
    expect(component.selectedCountry).toContain(mockCountryData.name);
  }));

  it('DOM country LI should contain mockCountryData name on page load completion', () => {
    const countryList = fixture.debugElement.nativeElement.querySelector('li').innerHTML;
    expect(countryList).toEqual(mockCountryData.name);
  });
});
