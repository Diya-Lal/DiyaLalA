import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { HttpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './interests/interests.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { SkillsComponent } from './skills/skills.component';
import { AcademicsComponent } from './academics/academics.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SidebarComponent,
    ContactComponent,
    ExperienceComponent,
    HomeComponent,
    InterestsComponent,
    AchievementsComponent,
    SkillsComponent,
    AcademicsComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
