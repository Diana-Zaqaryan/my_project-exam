import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';


@Directive({
	selector: '[myStyle]'
})
export class MystyleDirective {


	@Input('myStyle') public color = 'blue';
	// @ts-ignore
	@HostBinding('style.background-color') public backColor;


	constructor(private el: ElementRef, private render: Renderer2) {
		render.setStyle(el.nativeElement, 'font-size', '25px');
		console.log(el.nativeElement.outerText);


	}
	@HostListener('click', ['$event'])
	private onClick(event: Event) {
		console.log(event);

	}

	@HostListener('mouseenter')
	private mouseEnter() {
		 this.render.setStyle(this.el.nativeElement, 'color', '#adc');

		// this.backColor = '#adc';
	}

	@HostListener('mouseout')
	private MouseOut() {
		 this.render.setStyle(this.el.nativeElement, 'color', null);
		// this.backColor = null;
	}

}
