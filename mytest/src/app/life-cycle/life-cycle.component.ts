import {ChangeDetectionStrategy, Component, Host, Inject, Input, Optional, Self, SkipSelf} from '@angular/core';
import {MyservisService} from '../services/myservis.service';
import {LocalCountService} from '../services/local-count.service';
import {MyInterface, Name} from '../../myInterface';

@Component({
	selector: 'app-life-cycle',
	templateUrl: './life-cycle.component.html',
	styleUrls: ['./life-cycle.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{
		provide: MyservisService,
		useValue: 'LocalCountService'
	},
		{
			provide: Name,
			useValue: {name: 'Harut'}
		}]

})
export class LifeCycleComponent {
	// implements
	// OnInit,
	// OnChanges,
	// DoCheck,
	// // AfterViewChecked,
	// // AfterViewInit,
	// AfterContentChecked,
	// AfterContentInit,
	// OnDestroy {
	//
	// @Input() public getText = '';
	// @Input() public getText2 = '';
	//
	// public texts: string[] = [];
	//
	// // @ts-ignore
	//
	// // @ts-ignore
	// @ContentChild('contentButton') public contentButton: ElementRef;
	//
	// // @ts-ignore
	// @ViewChild('firstpar') public firstpar: ElementRef;
	//
	// constructor() {
	// 	console.log('Hii I am lifecycle-constuctor');
	// }
	//
	// public ngOnChanges(changes: SimpleChanges): void {
	// 	console.log('onChange works in lifeCycle');
	//
	//
	// }
	//
	// public ngOnInit() {
	// 	console.log('lifeCycle OnInit');
	//
	// }
	//
	// public ngDoCheck() {
	// 	console.log('lifeCycle DoCheck');
	// }
	//
	// public ngAfterContentInit() {
	// 	console.log('lifeCycle AfterContentInit');
	// 	 console.log(this.contentButton);
	//
	//
	// }
	//
	// public ngAfterContentChecked() {
	// 	console.log('lifeCycle AfterContentChecked');
	// 	// console.log(this.contentButton);
	//
	// }
	//
	// public ngAfterViewInit() {
	// 	console.log('lifeCycle AfterViewInit');
	// 	// console.log(this.contentButton);
	// 	console.log(this.firstpar);
	//
	//
	// }
	//
	// public ngAfterViewChecked() {
	// 	console.log('lifeCycle AfterViewChecked');
	// // console.log(this.contentButton);
	//
	//
	// }
	//
	// public ngOnDestroy(): void {
	// 	console.log('lifeCycle component destroied');
	// }
	//
	// public addText() {
	// 	this.texts.push(this.getText, this.getText2);
	// }
	@Input() public title = 'hello';

	// @ts-ignore
	public texts: string[];
	public count = 0;
	public count2 = '';

	// tslint:disable-next-line:max-line-length
	constructor(public myservice: MyservisService, public myservisGlobal: LocalCountService, @Inject(Name) name: MyInterface) {
		// this.count = myservice.count;
		// if (myservisGlobal) {
		// 	console.log(myservisGlobal.log('bye'));
		// }
		// console.log( myservisGlobal.log('parent'));
		// myservice.sayHi();
		// @ts-ignore
		console.log(this.myservice);
		// console.log(this.myservisGlobal === this.myservice);
		console.log(name.name);

	}
}
