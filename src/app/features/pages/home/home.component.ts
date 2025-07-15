import { Component, effect, Signal, signal, WritableSignal } from '@angular/core';
import { PenOverlayComponent } from './components/pen-overlay/pen-overlay.component';
import { HighlightCardComponent } from '@features/stories/highlight-card/highlight-card.component';
import { stories, authors, categories } from '@common/database';
import { AuthorInfo, StoryInfo } from '@common/types';
import { StoryCardComponent } from '@features/stories/story-card/story-card.component';
import { AuthorCardComponent } from '@features/stories/author-card/author-card.component';
import { CategoryInfo } from '@common/types';
import { CategoryCardComponent } from '@features/stories/category-card/category-card.component';

@Component({
    selector: 'home',
    imports: [
        PenOverlayComponent,
        HighlightCardComponent,
        StoryCardComponent,
        AuthorCardComponent,
        CategoryCardComponent,
    ],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    storyInfo: Signal<StoryInfo[]> = signal(stories);
    authorsInfo: Signal<AuthorInfo[]> = signal(authors);
    categoriesInfo: Signal<CategoryInfo[]> = signal(categories);
    highlightedCardId = signal<number>(0);
    editorsPick = signal<StoryInfo[]>([]);
    popularStories = signal<StoryInfo[]>([]);
    popularAuthors = signal<AuthorInfo[]>([]);

    constructor() {
        effect(() => {
            this.setEditorsPick(this.storyInfo());
            this.setPopularStories(this.storyInfo(), this.popularStories);
            this.setPopularAuthors(this.authorsInfo(), this.popularAuthors);
        });
    }

    private setEditorsPick(stories: StoryInfo[]): void {
        const filtered = stories.filter((story) => story.isEditorsPick);
        const maxIndex = filtered.length - 4;
        const firstIndex = Math.floor(Math.random() * maxIndex) + 1;
        const result = filtered.slice(firstIndex, firstIndex + 3);

        this.highlightedCardId.set(result[1].id);
        this.editorsPick.set(result);
    }

    private setPopularStories(stories: StoryInfo[], infoToSet: WritableSignal<StoryInfo[]>): void {
        this.setPopular(stories, infoToSet, 5);
    }

    private setPopularAuthors(
        authors: AuthorInfo[],
        infoToSet: WritableSignal<AuthorInfo[]>
    ): void {
        this.setPopular(authors, infoToSet, 6);
    }

    private setPopular(
        array: StoryInfo[] | AuthorInfo[],
        infoToSet: WritableSignal<StoryInfo[] | AuthorInfo[]>,
        numberOfItems: number
    ): void {
        const maxIndex = array.length - numberOfItems - 1;
        const firstIndex = Math.floor(Math.random() * maxIndex) + 1;
        const result = array.slice(firstIndex, firstIndex + numberOfItems);

        infoToSet.set(result);
    }

    expandHighlight(id: number): void {
        this.highlightedCardId.set(id);
    }
}
