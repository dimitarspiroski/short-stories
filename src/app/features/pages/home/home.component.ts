import { Component, effect, Signal, signal } from '@angular/core';
import { PenOverlayComponent } from './components/pen-overlay/pen-overlay.component';
import { HighlightCardComponent } from '@features/stories/highlight-card/highlight-card.component';
import { stories, authors } from '@common/database';
import { AuthorInfo, StoryInfo } from '@common/types';

@Component({
    selector: 'home',
    imports: [PenOverlayComponent, HighlightCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    storyInfo: Signal<StoryInfo[]> = signal(stories);
    authorsInfo: Signal<AuthorInfo[]> = signal(authors);
    highlightedCardId = signal<number>(-1);
    editorsPick = signal<StoryInfo[]>([]);

    constructor() {
        effect(() => {
            this.setEditorsPick(this.storyInfo());
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

    expandHighlight(id: number): void {
        this.highlightedCardId.set(id);
    }
}
