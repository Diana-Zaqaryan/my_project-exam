import {Component} from '@angular/core';

@Component ({
	selector: 'app-post4',
	template: `
        <div class='post4'>
            <h1>Post4 is working</h1>
            <p>fgigbdjhfbczekvhb z</p>
            {{number}}
            {{func()}}
            {{obj.a}}
        </div>
    `,
	styles : [ `
    .post4 {
       
        padding: 20px 20px;
    }
    `]
})

export class Post4Component {
	public title = 'hello my friend';
	public number = 42;
	public arr = [1, 2, 3];
	public obj = {
		a : 1,
		b : 'bye'
	};
	public func = function () {
	return 'hdbhbhb jhbhb,hbv,hbhzbhb ,hbz';
	};
	
}
