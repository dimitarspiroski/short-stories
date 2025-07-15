import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarDropdownComponent } from '@common/components/avatar-dropdown/avatar-dropdown.component';
import { ButtonType } from '@common/enums';

@Component({
    selector: 'header-component',
    imports: [RouterLink, AvatarDropdownComponent],
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    buttonType = ButtonType;
}
