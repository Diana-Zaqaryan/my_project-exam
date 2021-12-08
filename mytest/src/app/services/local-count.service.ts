import {Injectable} from '@angular/core';

import {AppModule} from '../app.module';

@Injectable()
export class LocalCountService {
	public count = 0;
	public local = 0;


	public log(text: string) {
		return (`log: ${text}`);
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
		console.log(`hello from localCount`);
	}
}
