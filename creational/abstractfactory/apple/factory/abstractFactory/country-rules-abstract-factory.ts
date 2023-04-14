import { Certificate } from '../../model/certificate/certificate';
import { Packing } from '../../model/packing/packing';

export interface CountryRulesAbstractFactory {
  getCertificates(): Certificate;
  getPacking(): Packing;
}
