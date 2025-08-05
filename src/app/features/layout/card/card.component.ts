import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
})
export class CardComponent {
  styleConfig = input('');
}
