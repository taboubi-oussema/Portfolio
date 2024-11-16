import { Component } from '@angular/core';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  constructor(public info:InformationService){}
  showAllProjects: boolean = false;

  get displayedProjects() {
    return this.showAllProjects ? this.info.project : this.info.project.slice(0, 3);
  }
}
