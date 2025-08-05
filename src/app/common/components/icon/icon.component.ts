import { Component, input } from '@angular/core';
import { IconType } from './icon.enum';

@Component({
  selector: 'icon',
  imports: [],
  templateUrl: './icon.component.html',
})
export class IconComponent {
  icon = input<IconType | null>(null);
  iconStyle = input<string>('');

  protected readonly iconType = IconType;
}
