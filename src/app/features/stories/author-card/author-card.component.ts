import { Component, input } from '@angular/core';
import { CardComponent } from '@features/layout/card/card.component';
import { AvatarComponent } from '@common/components/avatar/avatar.component';
import { AuthorInfo } from '@common/types';

@Component({
  selector: 'author-card',
  imports: [CardComponent, AvatarComponent],
  templateUrl: './author-card.component.html',
})
export class AuthorCardComponent {
  authorInfo = input<AuthorInfo | null>(null);
}
