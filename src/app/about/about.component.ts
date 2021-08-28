import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../core/services/profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public aboutDetails: string = '';

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getAboutDetails();
  }

  public getAboutDetails() {
    this.profileService.getAboutDetails().subscribe(
      (GetAboutSuccess :any) => {
        this.aboutDetails = GetAboutSuccess['about'];
      },
      (GetAboutError: any) => {
      },
    )
  }

}
