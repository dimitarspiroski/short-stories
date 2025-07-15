import { Component, input } from '@angular/core';

@Component({
    selector: 'avatar',
    imports: [],
    templateUrl: './avatar.component.html',
})
export class AvatarComponent {
    width = input<string>('h-12');
    height = input<string>('w-12');
}
