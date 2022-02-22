import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { CountriesComponent } from './countries.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { CountriesApiService } from '../../services/countries-api.service';
import { Countries } from '../../models/countries.model';
import { By } from '@angular/platform-browser';

describe('[CountriesComponent] Test Suite', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;
  const mockCountryData = {
    name: 'Wales',
    population: '350000',
    Alpha3Code: '1337',
  };
  const mockCountryCounter = [mockCountryData].length;

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

  it('[Mapper] should subscribe to API and populate countries object with mockCountries data', fakeAsync(() => {
    expect(component.countries).toBeNull();
    component.ngOnInit();
    tick();
    expect(component.countries).toContain(mockCountryData);
  }));

  it('[Selected] should contain selected country object from index of countries', fakeAsync(() => {
    expect(component.selectedCountry).toBeNull();
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    fixture.debugElement.nativeElement.querySelector('.countrySelection').click();
    expect(component.selectedCountry).toEqual({
      key: (component.countryCount - 1).toString(),
      value: { ...mockCountryData },
    });
  }));

  it('DOM country LI should contain mockCountryData name after ngOnInit completes', fakeAsync(() => {
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    const countryList = fixture.debugElement.nativeElement.querySelector('.countrySelection').innerHTML;
    expect(countryList).toEqual(mockCountryData.name);
  }));

  it('[CountryCounter] counter variable should be updated to the length of the returned array after ngOnInit', fakeAsync(() => {
    expect(component.countryCount).toBe(0);
    component.ngOnInit();
    tick();
    expect(component.countryCount).toEqual(mockCountryCounter);
  }));
});
