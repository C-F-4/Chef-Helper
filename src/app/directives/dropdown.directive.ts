import { Directive, HostListener, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @Output() toggled = new EventEmitter<string>();

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick(): void {
    if (this.elRef.nativeElement.ariaExpanded === 'true') {
      this.renderer.setAttribute(this.elRef.nativeElement, 'aria-expanded', 'false');
    } else {
      this.renderer.setAttribute(this.elRef.nativeElement, 'aria-expanded', 'true');
    }
    this.toggled.emit(this.elRef.nativeElement.ariaExpanded);
  }

}
