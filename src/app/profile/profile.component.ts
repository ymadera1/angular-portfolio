//profile.component.ts
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component ({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  imports: [ NgOptimizedImage ]
})

export class ProfileComponent {
  name: string = "Arjun Singh";
  role: string = "Software Developer";
  location: string = "Bengaluru, India";
  linkedinUrl: string = "https://www.linkedin_profile_url.com";
  githubUrl: string = "https://github_profile_url.com";
}




