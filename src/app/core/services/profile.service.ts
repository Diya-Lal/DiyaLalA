import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public $knowMore = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {}

  public getContactDetails() {
    return this.httpClient.get('./assets/jsons/contact.json');
  }

  public getAboutDetails() {
    return this.httpClient.get('./assets/jsons/about.json');
  }

  public getInterests() {
    return this.httpClient.get('./assets/jsons/interests.json');
  }

  public getAchievements() {
    return this.httpClient.get('./assets/jsons/achievements.json');
  }

  public getExperiences() {
    return this.httpClient.get('./assets/jsons/experiences.json');
  }

  public getAcademics() {
    return this.httpClient.get('./assets/jsons/academics.json');
  }

  public getSkills() {
    return this.httpClient.get('./assets/jsons/skills.json');
  }

  public getProjects() {
    return this.httpClient.get('./assets/jsons/projects.json');
  }

  public getOtherDetails() {
    return this.httpClient.get('./assets/jsons/others.json');
  }
}
