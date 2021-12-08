import {InjectionToken} from '@angular/core';

export interface MyInterface {
	name: string;
}
export const Name = new InjectionToken('my-name');
