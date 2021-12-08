import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MyservisService} from '../services/myservis.service';
import { DatePipe, TitleCasePipe } from '@angular/common';
import {Post} from '../app.component';

export interface Product {
	name: string;
	count: number;
	price: number;
}

@Component({
	selector: 'app-parent',
	templateUrl: './parent.component.html',
	styleUrls: ['./parent.component.css']
})
export class ParentComponent {
	public myMoney = 10000;

	public date = new Date();
	public myStr = 'my pipe';
	public float = 0.42;
	public float1 = 42;

	public obj = {
		a: 1,
		b: {
			c: 2
		},
		d: {
			e: 3,
			f: 4
		}
	};

	public title = '';
	public text = '';
	public posts: Post[] = [];
	@Output() public sendPosts: EventEmitter<Post[]> = new EventEmitter<Post[]>();

	public  addPost() {
		const post = ({
			title: this.title,
			text: this.text
		});
		this.posts.push(post);
		this.sendPosts.emit(this.posts);

	}


	public getPost(value: Post[]) {

	}

	public getTotalPrice (totalVal: number) {
		this.myMoney -= totalVal;
	}

}
