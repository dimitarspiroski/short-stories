import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { StoryInfo } from '@common/types';
import { CardComponent } from '@features/layout/card/card.component';
import { ButtonComponent } from '@features/layout/button/button.component';
import { ButtonSize, ButtonType } from '@common/enums';
import { IconModel, IconType } from '@common/components/icon';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@common/components/icon/icon.component';

@Component({
    selector: 'highlight-card',
    imports: [CardComponent, CommonModule, ButtonComponent, RouterLink, IconComponent],
    templateUrl: './highlight-card.component.html',
})
export class HighlightCardComponent {
    expanded = input(false);
    storyInfo = input<StoryInfo | null>(null);

    protected readonly buttonType = ButtonType;
    protected readonly buttonSize = ButtonSize;
    protected readonly bookIcon: IconModel = {
        name: IconType.bookOutline,
        style: 'h-5 w-5',
    };
    protected readonly bookmarkIcon: IconModel = {
        name: IconType.bookmarkOutline,
        style: 'h-5 w-5',
    };
    protected readonly starIcon: IconModel = {
        name: IconType.star,
        style: '',
    };
}
