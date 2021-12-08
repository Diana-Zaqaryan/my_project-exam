import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post3',
  templateUrl: './post3.component.html',
  styleUrls: ['./post3.component.css']
})
export class Post3Component {

  @Input() public inputTitle = '';
  @Input() public inputText = '';
}
