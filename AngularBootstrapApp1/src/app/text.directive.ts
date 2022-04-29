import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appText]',
})
export class TextDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'red';
    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.style.fontStyle = 'italic';
    el.nativeElement.style.textAligin = 'center';
    el.nativeElement.style.textShadow = '1px 1px';
  }
}
