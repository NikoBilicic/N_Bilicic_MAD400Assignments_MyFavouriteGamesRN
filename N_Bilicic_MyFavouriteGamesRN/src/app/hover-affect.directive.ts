import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit{

  constructor(private elm: ElementRef) { }

  ngOnInit(): void {

  }

  @HostListener('mouseover') onHover() {
    this.underlineMe();
  }

  @HostListener('mouseleave') offHover() {
    this.removeUnderline();
  }

  private underlineMe() {
    this.elm.nativeElement.style.textDecoration = "underline";
  }

  private removeUnderline() {
    this.elm.nativeElement.style.textDecoration = "none";
  }

}
