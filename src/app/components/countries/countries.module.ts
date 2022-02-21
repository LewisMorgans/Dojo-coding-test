import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CountriesRouterModule } from './countries-router.module';
import { CountriesComponent } from './countries.component';

@NgModule({
  declarations: [CountriesComponent],
  imports: [CommonModule, FormsModule, CountriesRouterModule, ReactiveFormsModule],
  exports: [],
})
export class CountriesModule {}
