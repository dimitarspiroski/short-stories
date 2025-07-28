import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { initialState } from './stories.reducer';
import { authors, categories, stories, storiesContent } from '@common/database';
import { computed } from '@angular/core';

export const StoriesStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((state) => {
        return {
            load(): void {
                patchState(state, {
                    stories: stories,
                    authors: authors,
                    categories: categories,
                    storiesContent: storiesContent,
                });
            },
        };
    }),
    withComputed((state) => {
        return {
            storyInfo: computed(() => state.stories()),
            authorsInfo: computed(() => state.authors()),
            categoriesInfo: computed(() => state.categories()),
            storiesContentInfo: computed(() => state.storiesContent()),
        };
    })
);
