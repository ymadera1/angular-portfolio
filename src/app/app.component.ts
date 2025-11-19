//app.component.ts
import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ProfileComponent, ProjectComponent]
})
export class AppComponent {
  title = 'Developer Portfolio';
}