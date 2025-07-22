import { Component, computed, inject } from '@angular/core';
import { signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { authors, stories, storiesContent } from '@common/database';
import { StoryContent } from '@common/types';
import { AvatarComponent } from '@common/components/avatar/avatar.component';
import { ButtonComponent } from '@features/layout/button/button.component';
import { ButtonType } from '@common/enums';

@Component({
    selector: 'app-story',
    imports: [AvatarComponent, ButtonComponent],
    templateUrl: './story.component.html',
})
export class StoryComponent {
    private route = inject(ActivatedRoute);
    private storyId = this.route.snapshot.paramMap.get('id');

    storyContent = signal<StoryContent | null>(
        storiesContent.find((story) => story.id === Number(this.storyId)) ?? null
    );
    currentPageNumber = signal(1);
    totalPageNumber = signal(Object.keys(this.storyContent()?.content ?? {}).length);
    currentPage = computed(() => this.storyContent()?.content[this.currentPageNumber()]);
    minutesLeft = computed(() => {
        const totalMinutes = this.totalPageNumber() * 2;
        const minutesRead = this.currentPageNumber() * 2;

        return totalMinutes - minutesRead;
    });
    storyInfo = computed(() => stories.find((story) => story.id === this.storyContent()?.storyId));
    authorInfo = computed(() =>
        authors.find((author) => author.id === this.storyContent()?.authorId)
    );

    protected readonly buttonType = ButtonType;

    previousPage(): void {
        if (this.currentPageNumber() > 1) {
            this.currentPageNumber.update((pageNumber) => pageNumber - 1);
        }
    }

    nextPage(): void {
        if (this.currentPageNumber() < this.totalPageNumber()) {
            this.currentPageNumber.update((pageNumber) => pageNumber + 1);
        }
    }
}
