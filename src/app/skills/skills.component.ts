import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../core/services/profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public technicalsSkills: any;
  public softSkills: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  public getSkills() {
    this.profileService.getSkills().subscribe(
      (GetSkillsSuccess :any) => {
        this.technicalsSkills = GetSkillsSuccess['technicalSkills'];
        this.softSkills =  GetSkillsSuccess['softSkills'];
      },
      (GetSkillsError) => {
      },
    )
  }

}
