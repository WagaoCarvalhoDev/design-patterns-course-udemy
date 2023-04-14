import { Certificate } from '../../model/certificate/certificate';
import { USCertificate } from '../../model/certificate/us-certificate';
import { Packing } from '../../model/packing/packing';
import { USPacking } from '../../model/packing/us-packing';
import { CountryRulesAbstractFactory } from './country-rules-abstract-factory';

export class USRulesAbstractFactory implements CountryRulesAbstractFactory {
  getCertificates(): Certificate {
    return new USCertificate();
  }
  getPacking(): Packing {
    return new USPacking();
  }
}
