import { Component } from '@angular/core';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  constructor(public info:InformationService) {}
}
