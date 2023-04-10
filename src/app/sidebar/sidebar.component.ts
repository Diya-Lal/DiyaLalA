import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ProfileService } from '../core/services/profile.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('menu', { static: false }) menu?: ElementRef;
  @Output() profileItemEmitted = new EventEmitter();
  @Output() sideBarToggled = new EventEmitter();
  public isChecked = true;
  constructor(
    private profileService: ProfileService,
    private renderer: Renderer2
  ) {
    this.profileService.$knowMore.subscribe((knowMore) => {
      if (knowMore) {
        this.renderer.setProperty(this.menu?.nativeElement, 'checked', true);
      }
    });
  }

  ngOnInit() {}

  public profileItemClicked(event: any) {
    typeof event === 'string'
      ? this.profileItemEmitted.emit(event)
      : this.profileItemEmitted.emit(event.target.text.toLowerCase());
  }

  public sideBarToggle(event: any) {
    this.isChecked = event.target.checked;
    this.sideBarToggled.emit(event.target.checked);
  }
}
