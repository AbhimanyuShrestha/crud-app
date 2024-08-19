import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, currencySymbol: string = 'Rs',decimalDigits: number = 2): unknown {    
    if (isNaN(value)) {
      return '';
    }
    return `${currencySymbol} ${parseFloat(value.toString()).toFixed(decimalDigits)}`;
  }

}
