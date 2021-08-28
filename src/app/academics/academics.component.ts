import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../core/services/profile.service';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss']
})
export class AcademicsComponent implements OnInit {

  public academics: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getAcademics();
  }

  public getAcademics() {
    this.profileService.getAcademics().subscribe(
      (GetAcademicsSuccess :any) => {
        this.academics = GetAcademicsSuccess['academics'];

      },
      (GetAcademicsError) => {
      },
    )
  }

}
