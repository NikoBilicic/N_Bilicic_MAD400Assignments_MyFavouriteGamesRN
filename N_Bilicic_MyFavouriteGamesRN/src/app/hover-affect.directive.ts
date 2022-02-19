import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit {

  constructor(private elm: ElementRef) { }

  ngOnInit(): void {

  }

  @HostListener('mouseover') onHover() {
    this.styleMe();
  }

  @HostListener('mouseleave') offHover() {
    this.removeStyle();
  }

  private styleMe() {
    if (this.elm.nativeElement.classList[0] == "type") {
      this.elm.nativeElement.style.textDecoration = "underline";
    } else if (this.elm.nativeElement.classList[0] == "tag") {
      this.elm.nativeElement.style.fontWeight = "bold";
    } else if (this.elm.nativeElement.classList.contains('is-first') ||
      this.elm.nativeElement.classList.contains('is-last')) {
          this.elm.nativeElement.style.borderWidth = "10px";
        this.elm.nativeElement.style.borderColor = "purple";
    }
  }

  private removeStyle() {
    if (this.elm.nativeElement.classList[0] == "type") {
      this.elm.nativeElement.style.textDecoration = "none";
    } else if (this.elm.nativeElement.classList[0] == "tag") {
      this.elm.nativeElement.style.fontWeight = "normal";
    } else if (this.elm.nativeElement.classList.contains('is-first') ||
      this.elm.nativeElement.classList.contains('is-last')) {
        this.elm.nativeElement.style.borderWidth = "1px";
        this.elm.nativeElement.style.borderColor = "black";
    }
  }

}
