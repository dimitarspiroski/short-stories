import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedStoriesComponent } from './featured-stories.component';

describe('FeaturedBooksComponent', () => {
    let component: FeaturedStoriesComponent;
    let fixture: ComponentFixture<FeaturedStoriesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeaturedStoriesComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FeaturedStoriesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
