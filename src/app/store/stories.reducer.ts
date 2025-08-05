import { AuthorInfo, CategoryInfo, StoryContent, StoryInfo } from '@common/types';

export interface StoriesState {
  stories: StoryInfo[];
  authors: AuthorInfo[];
  categories: CategoryInfo[];
  storiesContent: StoryContent[];
}

export const initialState: StoriesState = {
  stories: [],
  authors: [],
  categories: [],
  storiesContent: [],
};
