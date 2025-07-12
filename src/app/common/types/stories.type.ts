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
};