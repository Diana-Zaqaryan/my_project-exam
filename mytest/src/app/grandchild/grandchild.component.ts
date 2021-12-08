import {Component, OnInit, SkipSelf} from '@angular/core';
import {MyservisService} from '../services/myservis.service';
import {LocalCountService} from '../services/local-count.service';

@Component({
	selector: 'app-grandchild',
	templateUrl: './grandchild.component.html',
	styleUrls: ['./grandchild.component.css'],
	providers: [MyservisService, LocalCountService],

})
export class GrandchildComponent {

	public count = 0;

	constructor( public myservice: MyservisService) {
		this.count = myservice.count;
	}
}
