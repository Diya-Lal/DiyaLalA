import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../core/services/profile.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  public achievements: any;

  constructor(private profileSerice: ProfileService) { }

  ngOnInit(): void {
    this.getAchievements();
  }

  public getAchievements() {
    this.profileSerice.getAchievements().subscribe(
      (GetContactSuccess :any) => {
        this.achievements = GetContactSuccess['achievements'];
      },
      (GetContactError) => {
      },
    )
  }

}

