import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AiImageGeneratorService } from '../../client/ai-image-generator.service';
import { Profile } from '../../models/profile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  /**
   *
   */
  constructor(public aiService: AiImageGeneratorService) {
    
  }
handle1() {
  const profile: Profile = {
    age: 20,
    ethnicity: "black",
    name: "bob",
    surname: "martin",
    gender: "M"
  }
  this.aiService.setProfile(profile);
}
handle2() {
  const profile: Profile = {
    age: 50,
    ethnicity: "asian",
    name: "bob",
    surname: "asian",
    gender: "F"
  }
  this.aiService.setProfile(profile);
}
handle4() {
  const profile: Profile = {
    age: 40,
    ethnicity: "white",
    name: "bob",
    surname: "martin",
    gender: "F"
  }
  this.aiService.setProfile(profile);
}

}
