import { Component } from '@angular/core';


@Component({
  selector: 'app-pre-waiver',
  standalone: true,
  imports: [

  ],
  templateUrl: './pre-waiver.component.html',
  styleUrl: './pre-waiver.component.css'
})
export class PreWaiverComponent {
  cardOpened: { [key: string]: boolean } = {
    'coursesOffered': false,
    'coreCourses': false,
    'electiveCourses': false
  };

  // Function to toggle the card state
  toggleCard(cardName: string) {
    this.cardOpened[cardName] = !this.cardOpened[cardName];
  }
}
