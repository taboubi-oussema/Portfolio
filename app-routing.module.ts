import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  {path:"",redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:AboutMeComponent},
  {path:"project",component:ProjectComponent},
  {path:"experience",component:ExperienceComponent},
  {path:"contact",component:ContactMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
