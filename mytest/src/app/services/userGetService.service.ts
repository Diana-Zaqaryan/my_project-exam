import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../HttpClinet/model/user';
import {flatMap} from 'rxjs/operators';
// tslint:disable-next-line:import-blacklist
import {Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})


export class UserGetService {
	public users: User[] = [];
	// @ts-ignore
	public usersList$: Observable<User[]>;

	constructor(public http: HttpClient) {

	}

	public getUser() {
		this.http.get<User[]>('mytest/src/assets/my-json.json', {responseType: 'json'})
			.pipe(
				flatMap((users: any) => {
					users.forEach((user: User) => this.users.push(new User(user.id, user.name)));
		this.usersList$ = of(this.users);
		return this.usersList$;
				}))
			.subscribe( (val: any) => console.log(val));
	}

}
