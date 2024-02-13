import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Card } from '../../models/card';
import { CommonModule } from '@angular/common';
import { AiImageGeneratorService } from '../../client/ai-image-generator.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  cardsList: Card[] = this.aiService.getCards();
  goalPrompt: string = "I want to be a doctor";
  loader: boolean = false;

  constructor(public aiService: AiImageGeneratorService) { }
  async handleNewCard() {
    const newCard = new Card();
    this.loader = true;
    const image = await this.aiService.generateImage(this.goalPrompt);
    if(image){

      newCard.image = image;
    }
    this.cardsList.push(newCard);
    this.loader = false;
    this.aiService.setCards(this.cardsList);

    
  }

}
