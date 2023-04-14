import { BrazilianCertificate } from '../../model/certificate/brasilian-certificate';
import { Certificate } from '../../model/certificate/certificate';
import { BrazilianPacking } from '../../model/packing/brasilian-packing';
import { Packing } from '../../model/packing/packing';
import { CountryRulesAbstractFactory } from './country-rules-abstract-factory';

export class BrazilianRulesAbstractFactory
  implements CountryRulesAbstractFactory
{
  getCertificates(): Certificate {
    return new BrazilianCertificate();
  }
  getPacking(): Packing {
    return new BrazilianPacking();
  }
}
