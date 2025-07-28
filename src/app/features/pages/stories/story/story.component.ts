import { Component, computed, ElementRef, inject, viewChild } from '@angular/core';
import { signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { storiesContent } from '@common/database';
import { StoryContent, StoryInfo } from '@common/types';
import { AvatarComponent } from '@common/components/avatar/avatar.component';
import { ButtonComponent } from '@features/layout/button/button.component';
import { ButtonType } from '@common/enums';
import { StoriesStore } from 'src/app/store/stories.store';

@Component({
    selector: 'app-story',
    imports: [AvatarComponent, ButtonComponent],
    templateUrl: './story.component.html',
})
export class StoryComponent {
    private store = inject(StoriesStore);
    private route = inject(ActivatedRoute);
    private storyId = this.route.snapshot.paramMap.get('id');

    title = viewChild<ElementRef>('title');
    storyContent = signal<StoryContent | null>(
        storiesContent.find((story) => story.id === Number(this.storyId)) ?? null
    );
    currentPageNumber = signal(1);
    totalPageNumber = signal(Object.keys(this.storyContent()?.content ?? {}).length);
    similarStories = signal<StoryInfo[]>([]);
    currentPage = computed(() => this.storyContent()?.content[this.currentPageNumber()]);
    minutesLeft = computed(() => {
        const totalMinutes = this.totalPageNumber() * 2;
        const minutesRead = this.currentPageNumber() * 2;

        return totalMinutes - minutesRead;
    });
    storyInfo = computed(() =>
        this.store.storyInfo().find((story) => story.id === this.storyContent()?.storyId)
    );
    authorInfo = computed(() =>
        this.store.authorsInfo().find((author) => author.id === this.storyContent()?.authorId)
    );
    moreFromAuthor = computed(() => {
        const storyId = this.storyContent()?.storyId;
        const authorId = this.storyContent()?.authorId;

        return this.store
            .storyInfo()
            .filter((story) => story.id !== storyId && story.author.id === authorId)
            .slice(0, 3);
    });

    protected readonly buttonType = ButtonType;

    constructor() {
        this.setSimilarStories(this.store.storyInfo());
    }

    previousPage(): void {
        if (this.currentPageNumber() > 1) {
            this.currentPageNumber.update((pageNumber) => pageNumber - 1);
            this.scrollToTitle();
        }
    }

    nextPage(): void {
        if (this.currentPageNumber() < this.totalPageNumber()) {
            this.currentPageNumber.update((pageNumber) => pageNumber + 1);
            this.scrollToTitle();
        }
    }

    private setSimilarStories(stories: StoryInfo[]): void {
        const storyId = this.storyContent()?.storyId;
        const filteredStories = stories.filter(
            (story) =>
                story.id !== storyId &&
                story.tags.some((tag) => this.storyInfo()?.tags.includes(tag))
        );

        const firstIndex = Math.floor(Math.random() * (filteredStories.length - 1));
        const result = filteredStories.slice(firstIndex, firstIndex + 2);

        this.similarStories.set(result);
    }

    private scrollToTitle(): void {
        this.title()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
