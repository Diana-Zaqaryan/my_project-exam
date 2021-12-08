import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildComponent} from '../../child/child.component';
import {LocalCountService} from '../../services/local-count.service';
import {GrandchildComponent} from '../../grandchild/grandchild.component';
import {MyservisService} from '../../services/myservis.service';

@NgModule({
	declarations: [GrandchildComponent],
	exports: [
		GrandchildComponent,

	],
	imports: [
		CommonModule
	],


})
export class MymodulModule {
}
