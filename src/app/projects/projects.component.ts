import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../core/services/profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getAcademics();
  }

  public getAcademics() {
    this.profileService.getProjects().subscribe(
      (GetProjectsSuccess: any) => {
        this.projects = GetProjectsSuccess['projects'];
      },
      (GetProjectsError) => {}
    );
  }
}
