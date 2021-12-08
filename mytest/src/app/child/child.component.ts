import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Product} from '../parent/parent.component';
import {LocalCountService} from '../services/local-count.service';
@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnChanges {
	// public title = 'Hi';
	// public isTrue = true;
	// public inpuTVal = ''
	// public myTxt = '';
	// constructor() {
	// 	setTimeout(() => {
	// 		this.title = 'Bye';
	// 		this.isTrue = false;
	// 	}, 4000);
	// }
	//
	// public inputText(event: Event) {
	// 	return this.inpuTVal = (<HTMLInputElement>event.target).value;
	//
	// }
	//
	// public myText1(value: string) {
	// 	this.myTxt = value;
	// }

	public count = 0;
	public name = '';
	public price = 0;
	public products: Product[] = [];
	public value1 = '';
	public mess: string[] = [];
	public inputVal = '';

	@Input() public getMessFromParent: string[] = [];
	@Output()public sendToParnetmess = new EventEmitter<string>();


	public ngOnChanges () {
		console.log('onChanges is working');

	}

	public sendToParent(value: string) {
		this.sendToParnetmess.emit(value);
		this.inputVal = '';
	}

	public addProduct() {
		const newProduct: Product = {
			name: this.name,
			count: this.count,
			price: this.price
		};
		this.products.push(newProduct);

		this.name = '';
		this.count = this.price = 0;


	}

}

