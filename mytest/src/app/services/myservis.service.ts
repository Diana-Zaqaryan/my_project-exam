import {Injectable} from '@angular/core';
import {LocalCountService} from './local-count.service';
import {AppComponent} from '../app.component';
import {LifeCycleComponent} from '../life-cycle/life-cycle.component';

@Injectable()
export class MyservisService {
	public count = 0;
	public myValue = 0;

	// constructor(private  log: LocalCountService) {
	//
	// }
	public getInf(mes: string) {
		return mes;
	}
	public increase() {
		// this.log.log ('Increase...');
		this.count++;
	}
	public decrease() {
		// this.log.log ('Decrease...');
		this.count--;
	}
	public sayHi() {
		console.log(`hello from myservice`);
	}
}
