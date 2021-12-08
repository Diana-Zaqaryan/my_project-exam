import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeMoney'
})
export class ChangeMoneyPipe implements PipeTransform {

  public transform(value: number, valut: string, rate: number): number {
	switch (valut) {
		case 'RUB': {
	   		 return value * rate;

		}

		case 'USD': {
			return value * rate;

		}

		default: {
			return  value;
		}

	}
	}

}
