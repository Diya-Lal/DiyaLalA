import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AcademicsComponent } from './academics/academics.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './interests/interests.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'about', component: AboutComponent},
  {path : 'experience', component: ExperienceComponent},
  {path : 'academics', component: AcademicsComponent},
  {path : 'skills', component: SkillsComponent},
  {path : 'interests', component: InterestsComponent},
  {path : 'contact', component: ContactComponent},
  {path : 'achievements', component: AchievementsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
