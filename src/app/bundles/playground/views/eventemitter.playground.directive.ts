import {Directive, ElementRef, EventEmitter, OnInit, Output} from "@angular/core";
@Directive({
  selector: '[ori-eventemitter-playground]'
})
export class EventemitterPlaygroundDirective implements OnInit {
  @Output() outputField: EventEmitter<string> = new EventEmitter();

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit() {
    this.outputField.emit('John');
    setTimeout(() => this.outputField.emit('Toto'), 1000);
  }
}
