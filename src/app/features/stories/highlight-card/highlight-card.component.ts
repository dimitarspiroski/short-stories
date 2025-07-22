import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { StoryInfo } from '@common/types';
import { CardComponent } from '@features/layout/card/card.component';
import { ButtonComponent } from '@features/layout/button/button.component';
import { ButtonSize, ButtonType } from '@common/enums';
import { IconType } from '@common/components/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'highlight-card',
    imports: [CardComponent, CommonModule, ButtonComponent, RouterLink],
    templateUrl: './highlight-card.component.html',
})
export class HighlightCardComponent {
    expanded = input(false);
    storyInfo = input<StoryInfo | null>(null);
    icon = IconType;

    protected readonly buttonType = ButtonType;
    protected readonly buttonSize = ButtonSize;
}
