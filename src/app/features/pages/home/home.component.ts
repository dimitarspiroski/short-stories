import { Component, effect, inject, Signal, signal, WritableSignal } from '@angular/core';
import { PenOverlayComponent } from './components/pen-overlay/pen-overlay.component';
import { AuthorInfo, StoryInfo } from '@common/types';
import { StoryCardComponent } from '@features/stories/story-card/story-card.component';
import { AuthorCardComponent } from '@features/stories/author-card/author-card.component';
import { CategoryInfo } from '@common/types';
import { CategoryCardComponent } from '@features/stories/category-card/category-card.component';
import { FeaturedStoriesComponent } from '@features/layout/featured-stories/featured-stories.component';
import { StoriesStore } from 'src/app/store/stories.store';

@Component({
  selector: 'home',
  imports: [
    PenOverlayComponent,
    StoryCardComponent,
    AuthorCardComponent,
    CategoryCardComponent,
    FeaturedStoriesComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private store = inject(StoriesStore);

  storyInfo: Signal<StoryInfo[]> = this.store.storyInfo;
  authorsInfo: Signal<AuthorInfo[]> = this.store.authorsInfo;
  categoriesInfo: Signal<CategoryInfo[]> = this.store.categoriesInfo;
  popularStories = signal<StoryInfo[]>([]);
  popularAuthors = signal<AuthorInfo[]>([]);

  constructor() {
    effect(() => {
      this.setPopularStories(this.storyInfo(), this.popularStories);
      this.setPopularAuthors(this.authorsInfo(), this.popularAuthors);
    });
  }

  private setPopularStories(stories: StoryInfo[], infoToSet: WritableSignal<StoryInfo[]>): void {
    this.setPopular(stories, infoToSet, 5);
  }

  private setPopularAuthors(authors: AuthorInfo[], infoToSet: WritableSignal<AuthorInfo[]>): void {
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
}
