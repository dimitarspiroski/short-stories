import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { StoryInfo } from '@common/types';
import { FeaturedStoriesComponent } from '@features/layout/featured-stories/featured-stories.component';
import { StoryCardComponent } from '@features/stories/story-card/story-card.component';
import { PaginationComponent } from '@features/layout/pagination/pagination.component';
import { StoriesStore } from 'src/app/store/stories.store';

@Component({
    selector: 'app-stories',
    imports: [FeaturedStoriesComponent, StoryCardComponent, PaginationComponent],
    templateUrl: './stories.component.html',
})
export class StoriesComponent {
    private store = inject(StoriesStore);

    paginationTop = viewChild<ElementRef>('paginationTop');

    pages = computed<number[]>(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));
    currentStories = computed<StoryInfo[]>(() =>
        this.storyInfo().slice(this.firstPostIndex(), this.lastStoryIndex())
    );

    private storiesPerPage = 15;
    private currentPage = signal<number>(1);
    private lastStoryIndex = computed<number>(() => this.currentPage() * this.storiesPerPage);
    private firstPostIndex = computed<number>(() => this.lastStoryIndex() - this.storiesPerPage);
    private storyInfo = this.store.storyInfo;
    private totalPages = computed<number>(() =>
        Math.ceil(this.storyInfo().length / this.storiesPerPage)
    );

    setCurrentPage(page: number): void {
        this.currentPage.set(page);
        this.scrollToTop();
    }

    private scrollToTop(): void {
        if (this.paginationTop()) {
            this.paginationTop()?.nativeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }
}
