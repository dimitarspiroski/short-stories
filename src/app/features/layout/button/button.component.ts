import { Component, input } from '@angular/core';
import { IconType } from '@common/components/icon';
import { IconComponent } from '@common/components/icon/icon.component';
import { ButtonSize, ButtonType } from '@common/enums';

@Component({
  selector: 'button-component',
  imports: [IconComponent],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  buttonText = input('');
  buttonType = input(ButtonType.default);
  buttonSize = input(ButtonSize.small);
  styleConfig = input<string>('');
  icon = input<IconType | null>(null);
  iconStyle = input<string>('');
}
