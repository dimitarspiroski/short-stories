import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { CategoryInfo } from '@common/types';
import { CardComponent } from '@features/layout/card/card.component';

@Component({
    selector: 'category-card',
    imports: [CommonModule, CardComponent],
    templateUrl: './category-card.component.html',
})
export class CategoryCardComponent {
    categoryInfo = input<CategoryInfo | null>(null);
}
