import { Currency } from './currency.model';
import { Language } from './language.model';

export interface Country {
  name: string;
  population: number;
  alpha3Code: string;
  region: string;
  subregion: string;
  languages: Language[];
  currencies: Currency[];
}
