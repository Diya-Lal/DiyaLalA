import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../core/services/profile.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {

  public interests: any; 
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getInterests();
  }

  public getInterests() {
    this.profileService.getInterests().subscribe(
      (GetInterestsSuccess :any) => {
        this.interests = GetInterestsSuccess['interests'];
      },
      (GetInterestsError: any) => {
      },
    )
  }


}
