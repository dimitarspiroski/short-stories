import { Component, input } from '@angular/core';
import { ButtonSize, ButtonType } from '@common/enums';

@Component({
    selector: 'button-component',
    imports: [],
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    buttonText = input('');
    buttonType = input(ButtonType.default);
    buttonSize = input(ButtonSize.small);
    styleConfig = input<string>('');
}
