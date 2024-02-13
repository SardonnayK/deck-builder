import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'deck-builder';

  constructor(public router: Router) {
  }
  
  handleProfile() {
    this.router.navigate(['/profile']);
    
  }
  handleHome() {
    
    this.router.navigate(['/home']);
   }
}
