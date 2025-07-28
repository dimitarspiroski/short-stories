import { Component } from '@angular/core';
import { IconModel, IconType } from '@common/components/icon';
import { IconComponent } from '@common/components/icon/icon.component';

@Component({
    selector: 'icons',
    imports: [IconComponent],
    templateUrl: './icons.component.html',
})
export class IconsComponent {
    protected readonly iconType = IconType;
    protected readonly icons: IconModel[] = [
        {
            name: IconType.facebook,
            style: 'h-5 w-5 cursor-pointer',
        },
        {
            name: IconType.twitter,
            style: 'h-5 w-5 cursor-pointer',
        },
        {
            name: IconType.instagram,
            style: 'h-5 w-5 cursor-pointer',
        },
        {
            name: IconType.youtube,
            style: 'h-5 w-5 cursor-pointer',
        },
    ];
}
