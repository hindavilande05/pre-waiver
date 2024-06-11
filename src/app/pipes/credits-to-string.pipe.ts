import { Pipe, PipeTransform } from '@angular/core';
import { Credit } from '../models/interfaces';

@Pipe({
  name: 'creditsToString',
  standalone: true
})
export class CreditsToStringPipe implements PipeTransform {

  transform(credits: Credit): string {
    if (credits && typeof credits === 'object') {
      return `${credits.L}-${credits.T}-${credits.P}-${credits.C}`;
    }
    return '';
  }

}
