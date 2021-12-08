import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../parent/parent.component';

@Pipe({
	name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {
	public transform(arr: string[], search: string): string[] {
		if ( search === '') {
			return arr;
		} else {
			return arr.filter((val: string) => {
				return val.toLocaleLowerCase().includes(search.toLocaleLowerCase());
			});
		}


	}

	// public transform(products: Product[], search: string): Product[] {
	// 	return products.filter(product => {
	// 		return product.name.includes(search);
	// 	});
	// }

}
