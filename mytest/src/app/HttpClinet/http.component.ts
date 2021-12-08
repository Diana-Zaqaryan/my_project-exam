import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {User} from './model/user';
import {delay, flatMap, map, mergeMap, switchMap} from 'rxjs/operators';
// tslint:disable-next-line:import-blacklist
import {Observable, of, from, Subscription, fromEvent, interval} from 'rxjs';


export interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;

}

@Component({
	selector: 'app-http',
	templateUrl: './http.component.html',
	styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, AfterViewInit {
	public todos$: Observable<User[]> = of([]);
	// @ts-ignore
	public todo: Subscription;
	public isReady = false;
	public myobj: User[] = [];
	// @ts-ignore
	public val;

	public in1 = '';
	public in2 = '';
	// @ts-ignore
	public input1;
	// @ts-ignore
	public input2;
	// @ts-ignore
	public subscriber: Subscription;
	public name = '';
	public loading = false;


	constructor(private http: HttpClient) {

	}

	public ngAfterViewInit(): void {


	}

	public ngOnInit(): void {

		const beginBtn = document.getElementById('beginBtn');
		const stopBtn = document.getElementById('stopBtn');

		const addBtn = document.getElementById('addBtn');


		const p = document.getElementById('para');
		// @ts-ignore
		const obs1 = fromEvent<InputEvent>(input1, 'input');
		// @ts-ignore
		const ob2 = fromEvent<InputEvent>(input2, 'input');


		obs1.subscribe((val: InputEvent) => console.log(val));

		// @ts-ignore
		// @ts-ignore
		obs1.pipe(
			flatMap((event1: any) => {

				return ob2.pipe(
					map((event2: any) => event2.target.value + ' ' + event1.target.value)
				);
			})
		).subscribe((combineVal: any) => {
			// @ts-ignore
			p.textContent = combineVal;
			this.val = combineVal;
		});

		this.todos$ = this.http.get<User[]>('./assets/my-json.json', {responseType: 'json'})
			.pipe(
				flatMap((todo: User[]) => {
					console.log('json ->', todo);
					const list: User[] = [];
					todo.forEach((obj: User) => list.push(new User(obj.id, obj.name)));
						// .forEach((obj: User) => list.push(new User(obj.id, obj.name)));
					console.log('objects ->', list);
					this.todos$ = of(todo);
					return this.todos$;
				}));
		this.todos$.subscribe((val: User []) => {
				val.forEach((us: User) => this.myobj.push(us));
				return this.myobj;
			}
		);


		// @ts-ignore
		const eventObs = fromEvent<Event>(beginBtn, 'click');
		const myInterval = interval(1000);


		this.subscriber = eventObs.pipe(
			switchMap((evenet: any) => {
				return myInterval;
			}),
		)
			.subscribe((val: any) => console.log(val));


	}

	public stop() {
		this.subscriber.unsubscribe();
	}

	public addName() {


		this.myobj.push(new User(6, this.name));

		return this.myobj;
		// // @ts-ignore
		// const addBtnObs = fromEvent(addBtn, 'click');
		// addBtnObs.subscribe((event: any) => {
		// 	this.myobj.push(new User(5, this.name));
		// 	return this.myobj;
		// });
	}

	public deletName(id: number) {
		// this.http.delete(`'./assets/my-json.json/${id}'`).subscribe( (res: object) => console.log(res))
		const newUser: User[] = [];
		this.myobj.forEach((user: User) => {
			if (user.id !== id) {
				newUser.push(user);
			}
			this.myobj = newUser;
			return this.myobj;
		});
	}
}

