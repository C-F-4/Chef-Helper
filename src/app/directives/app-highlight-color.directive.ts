import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightColor]'
})
export class HighlightColorDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() appHighlightColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.cursor') cursor: string;

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    this.cursor = 'pointer';
  }

  @HostListener('mouseenter') onMouseHover(): void {
    this.backgroundColor = this.appHighlightColor;
  }

  @HostListener('mouseleave') onMouseExit(): void {
    this.backgroundColor = this.defaultColor;
  }

}
