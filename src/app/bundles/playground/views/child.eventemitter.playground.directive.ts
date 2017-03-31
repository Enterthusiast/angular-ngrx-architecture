import {Directive, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {EventemitterPlaygroundDirective} from './eventemitter.playground.directive';


@Directive({
  selector: '[ori-child-eventemitter-playground]'
})
export class ChildEventemitterPlaygroundDirective extends EventemitterPlaygroundDirective {

  newValue = 'Tata';

}
