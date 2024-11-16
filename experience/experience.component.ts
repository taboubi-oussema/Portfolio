import { Component } from '@angular/core';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
constructor(public info:InformationService){}
}
