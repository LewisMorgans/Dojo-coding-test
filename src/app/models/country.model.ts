import { Currency } from './currency.model';
import { Language } from './language.model';

export interface Country {
  Name: string;
  Population: number;
  Alpha3Code: string;
  region: string;
  subregion: string;
  languages: Language[];
  currencies: Currency[];
}
