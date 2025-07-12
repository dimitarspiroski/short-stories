import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { AppStore } from './store/app.store';
import { HeaderComponent } from './features/layout/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './features/layout/footer/footer.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        ReactiveFormsModule,
        CommonModule,
        HeaderComponent,
        FooterComponent,
        RouterOutlet,
        FooterComponent,
    ],
    providers: [AppStore],
})
export class AppComponent implements OnInit, OnDestroy {
    private formBuilder = inject(FormBuilder);
    private destroy$ = new Subject<void>();
    appStore = inject(AppStore);
    darkModeForm: FormGroup = this.formBuilder.group({
        isDarkTheme: this.appStore.isDarkTheme(),
    });

    ngOnInit(): void {
        initFlowbite();
        this.setTheme();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private setTheme() {
        this.darkModeForm.valueChanges
            .pipe(
                tap((value) => {
                    this.appStore.setTheme(value.isDarkTheme);
                }),
                takeUntil(this.destroy$)
            )
            .subscribe();
    }
}
