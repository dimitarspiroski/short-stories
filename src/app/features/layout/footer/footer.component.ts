import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconsComponent } from '@features/layout/footer';

@Component({
  selector: 'app-footer',
  imports: [IconsComponent, RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {}
