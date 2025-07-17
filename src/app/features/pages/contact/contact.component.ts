import { Component } from '@angular/core';
import { ButtonSize, ButtonType } from '@common/enums';
import { ButtonComponent } from '@features/layout/button/button.component';

@Component({
    selector: 'app-contact',
    imports: [ButtonComponent],
    templateUrl: './contact.component.html',
})
export class ContactComponent {
    protected readonly buttonType = ButtonType;
    protected readonly buttonSize = ButtonSize;
}
