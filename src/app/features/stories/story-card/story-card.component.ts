import { Component, input } from '@angular/core';
import { StoryInfo } from '@common/types';
import { CardComponent } from '@features/layout/card/card.component';
import { AvatarComponent } from '@common/components/avatar/avatar.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'story-card',
    imports: [CardComponent, AvatarComponent, RouterLink],
    templateUrl: './story-card.component.html',
})
export class StoryCardComponent {
    storyInfo = input<StoryInfo | null>(null);
}
