import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { StoryInfo } from '@common/types';
import { CardComponent } from '@features/layout/card/card.component';

@Component({
    selector: 'highlight-card',
    imports: [CardComponent, CommonModule],
    templateUrl: './highlight-card.component.html',
    styleUrl: './highlight-card.component.css',
})
export class HighlightCardComponent {
    expanded = input(false);
    storyInfo = input<StoryInfo | null>(null);
}
