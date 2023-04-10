import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProfileService } from '../core/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Output() knowMoreClicked = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public handleKnowMore(event: any) {
    this.knowMoreClicked.emit('about');
  }
}
