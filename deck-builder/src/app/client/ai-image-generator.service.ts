import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import OpenAI from 'openai';
import { environment } from '../../environments/environment';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class AiImageGeneratorService {
  private openai = new OpenAI({apiKey: environment.openai.apiKey,dangerouslyAllowBrowser: true});
  public  profile: Profile = localStorage.getItem("profile") ? JSON.parse(localStorage.getItem("profile")!):  {age:27, ethnicity: "african", gender:"M", name:"bob", surname:'martin'};
  private cards: Card[] = localStorage.getItem("cards") ? JSON.parse(localStorage.getItem("cards")!) :[];

  constructor() { }


  async generateImage( goal: string) {
    const prompt = `Create a picture of a ${this.profile.ethnicity} ${this.profile.gender} aged ${this.profile.age}.` 
    + `The image should depict the person working on their goal of "${goal}". Avoid any text in the image.`
    + `The image should be vivid and realistic and should focus on the person achieving the goal. Provide a scenic background in alignment with the goal.`


    const imageResponse = await this.openai.images.generate({
      model: "dall-e-3",
      prompt,
      response_format: "url",
      style: "vivid",
    });

    imageResponse.data;
    console.log(JSON.stringify(imageResponse.data, null, 2)); 
    return imageResponse.data[0].url;
  }

  public setProfile(profile: Profile){
    this.profile = profile;
    localStorage.setItem("profile", JSON.stringify(profile));
  }
  public setCards(cards: Card[]){
    this.cards = cards;
    localStorage.setItem("cards", JSON.stringify(cards));
  }
  public getCards(): Card[]{
    return this.cards;
  }
}
