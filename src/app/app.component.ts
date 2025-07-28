import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './features/layout/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './features/layout/footer/footer.component';
import { StoriesStore } from './store/stories.store';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [HeaderComponent, FooterComponent, RouterOutlet],
})
export class AppComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();
    private store = inject(StoriesStore);

    ngOnInit(): void {
        initFlowbite();
        this.store.load();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
