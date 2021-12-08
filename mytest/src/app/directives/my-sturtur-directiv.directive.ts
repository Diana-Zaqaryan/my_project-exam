import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
	selector: '[appMySturturDirectiv]'
})
export class MySturturDirectivDirective {

	// tslint:disable-next-line:no-any
	constructor(private template: TemplateRef<any>, public  viewContainer: ViewContainerRef) {
	}

	@Input() set appMySturturDirectiv(condition: boolean) {
		if (condition) {
			this.viewContainer.createEmbeddedView(this.template);
		} else {
			this.viewContainer.clear();
		}

	}

}
