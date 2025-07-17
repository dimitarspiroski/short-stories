import { Component, effect, input, Input, Signal, signal } from '@angular/core';
import { stories } from '@common/database';
import { StoryInfo } from '@common/types';
import { HighlightCardComponent } from '@features/stories/highlight-card/highlight-card.component';

@Component({
    selector: 'featured-stories',
    imports: [HighlightCardComponent],
    templateUrl: './featured-stories.component.html',
})
export class FeaturedStoriesComponent {
    storyInfo: Signal<StoryInfo[]> = signal(stories);
    editorsPick = signal<StoryInfo[]>([]);
    highlightedCardId = signal<number>(0);

    constructor() {
        effect(() => {
            this.setEditorsPick(this.storyInfo());
        });
    }

    expandHighlight(id: number): void {
        this.highlightedCardId.set(id);
    }

    private setEditorsPick(stories: StoryInfo[]): void {
        const filtered = stories.filter((story) => story.isEditorsPick);
        const maxIndex = filtered.length - 4;
        const firstIndex = Math.floor(Math.random() * maxIndex) + 1;
        const result = filtered.slice(firstIndex, firstIndex + 3);

        this.highlightedCardId.set(result[1].id);
        this.editorsPick.set(result);
    }
}
