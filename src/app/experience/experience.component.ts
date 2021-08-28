import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../core/services/profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public experiences:any;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getExperience();
  }

  public getExperience() {
    this.profileService.getExperiences().subscribe(
      (GetExperienceSuccess :any) => {
        this.experiences = GetExperienceSuccess['experiences'];
      },
      (GetContactError) => {
      },
    )
  }
}

