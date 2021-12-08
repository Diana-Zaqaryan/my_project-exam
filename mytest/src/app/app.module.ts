import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ChildComponent} from './child/child.component';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ParentComponent} from './parent/parent.component';

import {MultByPipe} from './pipes/mult-by.pipe';

import {SearchPipePipe} from './pipes/search-pipe.pipe';
import {ChangeMoneyPipe} from './pipes/change-money.pipe';
import {Post3Component} from './post3/post3.component';

import {LifeCycleComponent} from './life-cycle/life-cycle.component';
import {MystyleDirective} from './directives/mystyle.directive';
import {GrandchildComponent} from './grandchild/grandchild.component';
import {MyservisService} from './services/myservis.service';
import {LocalCountService} from './services/local-count.service';
import { MySturturDirectivDirective } from './directives/my-sturtur-directiv.directive';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {HttpComponent} from './HttpClinet/http.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
	declarations: [
		AppComponent,
	 ChildComponent,
		MultByPipe,
		Post3Component,
	 ParentComponent,
		SearchPipePipe,
		ChangeMoneyPipe,
		LifeCycleComponent,
		MystyleDirective,
  MySturturDirectivDirective,
		HttpComponent,

	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		HttpClientJsonpModule,
		MatSliderModule


	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {

}
