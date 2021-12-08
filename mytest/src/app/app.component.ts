import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	DoCheck,
	ElementRef,
	OnDestroy,
	OnInit,
	ViewChild
} from '@angular/core';
import {MyservisService} from './services/myservis.service';
import {LocalCountService} from './services/local-count.service';
// tslint:disable-next-line:import-blacklist
import {
	Observable,
	Subscriber,
	of,
	Subscription,
	from,
	pipe,
	Subject,
	multicast,
	BehaviorSubject,
	ReplaySubject
// tslint:disable-next-line:import-blacklist
} from 'rxjs';
import {map, filter, switchMap, take, concatAll, merge} from 'rxjs/operators';


export interface Post {
	title: string;
	text: string;
}

export interface User {
	id: number;
	name: string;

	getuser(id: number): string;

	getName(): string;

	getId(): number;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	viewProviders: [MyservisService],
	providers: [LocalCountService]


})
export class AppComponent implements OnInit,
	DoCheck,
	AfterViewChecked,
	AfterViewInit,
	AfterContentChecked,
	AfterContentInit,
	OnDestroy {

//  public title = 'mytest';
// public search = '';
// public productsParent: Product[] = [
// {name: 'cup', count: 2, price: 120},
// {name: 'bag', count: 1, price: 2500},
// {name: 'pen', count: 20, price: 20},
// {name: 'cookie', count: 25, price: 200},
// ];

//
// 	public money = 0;
//
// 	public valut = '';
// 	public rate = 0;
// 	public isChild = false;
//
// 	public mytext = '';
// 	public inputText = '';
// 	public mytext2 = '';
//

	// @ts-ignore
	public texts: string[];
	public inputText = '';
	public par = true;

	public names: string[] = ['Diana', 'Liana', 'Kisa'];
	public myName = '';
	public searchName = '';
	public childmess = '';
	public messToChild: string[] = [];
	public inptVal = '';
	public childMess: string[] = [];
	public objects = [
		{
			name: 'Diana',
			age: 25
		},
		{
			name: 'Liana',
			age: 20
		}
	];

	public users: User[] = [
		{
			id: 1,
			name: 'user',
			getuser(id: number) {
				if (id === this.id) {
					return this.name;
				}
				return '';
			},
			getName(): string {
				return this.name;
			},
			getId(): number {
				return this.id;
			}
		},
		{
			id: 2,
			name: 'admin',
			getuser(id: number) {
				if (id === this.id) {
					return this.name;
				}
				return '';
			},
			getName(): string {
				return this.name;
			},
			getId(): number {
				return this.id;
			}
		}
	];

	public anotherUsers: User[] = [{
		id: 1,
		name: 'Tom',
		getuser(id: number) {
			if (this.id === id) {
				return this.name;
			}
			return '';
		},
		getName(): string {
			return this.name;
		},
		getId(): number {
			return this.id;
		}
	},
		{
			id: 2,
			name: 'Sam',
			getuser(id: number) {
				if (this.id === id) {
					return this.name;
				}
				return '';
			},
			getName(): string {
				return this.name;
			},
			getId(): number {
				return this.id;
			}
		}];
	// use observable

	public obs = new Observable((observer: Subscriber<number>) => {
		// tslint:disable-next-line:ban-comma-operator
		observer.next(1);
		observer.next(2);
		observer.error('erroe');
	});
	public obs2 = Observable.create((observer: Subscriber<string>) => {
		const strings = ['Hi', 'Bye'];
		strings.forEach((val: string) => {
			observer.next(val);
		});
		// observer.complete();
	});


	public obs4 = from(this.objects);


	public obs3 = of(this.objects);

	public sbj = new BehaviorSubject<number>(5);

	public replaySub = new ReplaySubject<number>(10);
	public sbj2 = new ReplaySubject<number>(2);


	public chatgroup1 = new Observable((observer: Subscriber<string | number>) => {
		observer.next('tom-hi');
		observer.next('jane-hi');
		observer.next('tom-how are you');
		observer.next('jane-I am fine');
		observer.next(Math.random() * 10);
	});

	public chatgroup2 = new Subject<string>();

	// public obj5 = new Observable((obs: Subscriber<number>) => {
	// 	let count = 0;
	// 	setInterval(() => obs.next(count++), 1000);
	//
	// });

	public obj6 = new Subject<number>();


//
// 	public posts: Post[] = [
// 		{
// 			title: 'Title1',
// 			text: 'text1'
// 		},
// 		{
// 			title: 'Title2',
// 			text: 'text2'
// 		},
// 	];
//
// // @ts-ignore
//
// 	@ViewChild('childComp') public childComp: ElementRef;
// 	// @ts-ignore
// 	@ViewChild('input1') public input1: ElementRef;
//
// // 	public texts = [{
// // 		'1': this.mytext,
// // 		'2': this.mytext2
// // 	}];
// //


//
	public ngOnInit() {
	console.log('Parent onInit works');

		// use observable
		console.log('Observable with constructor');
		this.obs.subscribe(
			(val: number) => {
				console.log(val);
			},
			(er: string) => {
				console.log(er);
			},
			() => console.log('Completed')
		);

		console.log('Observable with create');
		this.obs2.subscribe(
			(val: string) => console.log(val),
			(er: string) => {
				console.log(er);
			},
			() => {
				console.log('Comleted');
			}
		);
		console.log('***************** Observable with of ********************');
		const sub: Subscription = this.obs3.subscribe(
			(val: Object[]) => {
				val.forEach((obj: Object) => {
					// @ts-ignore

					console.log(obj.name);
				});

			},

			null,

			() =>
				console.log('Completed'));

		const obs4 = of(100, 200, 300).subscribe((val: number) => console.log(val), null,
			() =>
				console.log('Completed'));


		console.log('************ Observable with from *******************');
		this.obs4.subscribe(
			(val: object) => {
				// @ts-ignore
				console.log('name is ' + val.name);
			}
		);
		this.obs4.subscribe((val: object) => {
				// @ts-ignore
				console.log('second name is ' + val.name);
			}
		);

		const obs5 = from('Diana').subscribe((letter: string) => console.log('letter is ' + letter),
			() =>
				console.log('Completed'));

		const obspromis = from(new Promise((resolve, reject) => {
			reject(('promis error'));
		})).subscribe(
			(val: unknown) => {
				console.log('promise resolve ' + val);
			},
			(er: object) => console.log(er));  // katarum syncron gorcoxutyunner@ nor tpum

		console.log('************ Observable with map *******************');
		const obsMap = from([1, 2, 3, 4, 5, 6])
			.pipe(
				map((val: number) => val * 2),
				filter((val: number) => val % 3 === 0)
			).subscribe((value: number) => console.log('map and filter return ' + value));


		console.log('************ Observable with switchMap *******************');
		// @ts-ignore
		const obsSwitchMap = of(1, 2)
			.pipe(
				switchMap((id: number) => from(this.anotherUsers.filter((obj: User) => obj.getId() === id))))
			.subscribe((val: User) => console.log('swith value ' + val.name));

		console.log('************ Observable with take *******************');
		const obsTake = from('Diana').pipe(
			take(2),
			merge()
		).subscribe((val: string) => console.log(val));


		console.log('************ Subject *******************');
		this.sbj.subscribe((vl: number) => console.log(`1st: ${vl}`));
		this.sbj.subscribe((vl: number) => console.log(`2nd: ${vl}`));
		this.sbj.next(7);


		console.log('************ ReplaySubject *******************');
		this.replaySub.next(22);
		this.replaySub.subscribe((value: number) => console.log(value));
		this.replaySub.next(25);
		this.replaySub.next(26);
		this.replaySub.subscribe((value: number) => console.log(value));


		this.sbj2.next(102);
		this.sbj2.subscribe((vl: number) => console.log(`${vl}`));
		this.sbj2.next(103);
		this.sbj2.next(104);
		this.sbj2.subscribe((vl: number) => console.log(`${vl}`));


		this.chatgroup1.subscribe((val: string | number) => {
			console.log(val);
		});
		this.chatgroup1.subscribe((val: string | number) => {
			console.log(val);
		});
		this.chatgroup2.next('tom-hi');
		this.chatgroup2.next('jane-hi');
		this.chatgroup2.subscribe((value => console.log(value)));
		this.chatgroup2.next('tom-how are you');
		this.chatgroup2.next('jane-I am fine');
	}


	public ngDoCheck() {
		console.log(
			'Parent  DoCheck'
		);
	}


	public ngAfterContentInit() {
		console.log(
			'Parent  AfterContentInit'
		);


	}

	public ngAfterContentChecked() {
		console.log('Parent  AfterContentChecked');

	}

	public ngAfterViewInit() {
		console.log('Parent  AfterViewInit');

	}

	public ngAfterViewChecked() {
		console.log('Parent  AfterViewChecked');


	}

	public ngOnDestroy(): void {
		console.log('Parent  component destroied');
	}

	public addName(myName: string) {
		this.names.push(myName);
		this.myName = '';

	}

	public sendMess(val: string) {
		this.messToChild.push(val);
		this.inptVal = '';

	}

	public getFromChild(value: string) {
		this.childMess.push(value);
	}


//
// 	public addChild() {
// 		this.isChild = !this.isChild;
// 	}
//
// 	public getPosts(value: Post) {
// 		this.posts.push(value);
//
// 	}
//
// 	public addText() {
// 		this.inputText = this.mytext;
// 		this.texts.push({
// 			'1': this.mytext,
// 			'2': this.mytext2
// 		});


//
// constructor(public myservisGlobal: MyservisService, public local: LocalCountService) {
// 	console.log(myservisGlobal.count);
// 	console.log(local.log('parnet'));
//
// }
//
//

//
// public addText() {
// 	this.texts.push(this.inputText);
//
// }

}
