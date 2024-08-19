import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    //  console.log(this.elRef.nativeElement.children)
    const children: HTMLCollection = this.elRef.nativeElement.children;

    Array.from(children).forEach((element: any) => {
      this.renderer.setStyle(element, 'backgroundColor', '#7bdcb5');
    });
  }

  @HostListener('mouseleave') onMouseLeave() {
    const children: HTMLCollection = this.elRef.nativeElement.children;

    Array.from(children).forEach((element: any) => {
      this.renderer.setStyle(element, 'backgroundColor', null);
    });
  }
}
