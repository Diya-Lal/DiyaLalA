import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('details', { static: false }) details?: ElementRef;
  constructor(private renderer: Renderer2) {}
  public slideHandler(el: string): void {
    const section: HTMLElement | null = document.getElementById(el);
    section?.scrollIntoView({ behavior: 'smooth' });
  }
  public sideBarToggled(sideBarOpen: boolean): void {
    if (sideBarOpen) {
      this.renderer.removeClass(
        this.details?.nativeElement,
        'details-margin-right'
      );
      this.renderer.addClass(
        this.details?.nativeElement,
        'details-margin-left'
      );
    } else {
      this.renderer.removeClass(
        this.details?.nativeElement,
        'details-margin-left'
      );
      this.renderer.addClass(
        this.details?.nativeElement,
        'details-margin-right'
      );
    }
  }
}
