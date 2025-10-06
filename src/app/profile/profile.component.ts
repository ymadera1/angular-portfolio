//profile.component.ts
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['profile.component.css']
  
})

export class ProfileComponent {
  name: string = "Yvonne Madera";
  role: string = "Frontend Developer";
  location: string = "Jersey City, New Jersey";
  linkedinUrl: string = "https://www.linkedin.com/in/yvonne-madera-729b5b21/";
  githubUrl: string = "https://github_profile_url.com";

}





