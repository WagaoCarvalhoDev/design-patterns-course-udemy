import { Certificate } from './certificate';

export class BrazilianCertificate implements Certificate {
  applyCertification(): string {
    return "\t- Calibrating Brasilian rules\n\t- Applying Anatel's Stamp";
  }
}
