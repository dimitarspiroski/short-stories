export type StoryInfo = {
    id: number;
    title: string;
    author: AuthorInfo;
    imgSrc: string;
    tags: string[];
    isBookmarked: boolean;
    description: string;
    isEditorsPick: boolean;
};

export type AuthorInfo = {
    id: number;
    authorName: string;
    authorImgSrc: string;
    noOfStories: number;
    noOfFollowers: number;
    tags: string[];
    bio: string;
    yearOfBirth: number;
};

export type CategoryInfo = {
    categoryName: string;
    noOfStories: number;
    categoryImgSrc?: string;
};

export type StoriesContent = {
    storiesContent: StoryContent[];
};

export type StoryContent = {
    id: number;
    storyId: number;
    authorId: number;
    content: Record<number, string>;
};
