import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { StoryInfo } from '@common/types';
import { CardComponent } from '@features/layout/card/card.component';

@Component({
    selector: 'highlight-card',
    imports: [CardComponent, CommonModule],
    templateUrl: './highlight-card.component.html',
})
export class HighlightCardComponent {
    expanded = input(false);
    storyInfo = input<StoryInfo | null>(null);
}
