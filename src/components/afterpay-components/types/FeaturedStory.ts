import * as dayjs from 'dayjs';

export type FeaturedStory = {
    url: string,
    subheading: string;
    name: string;
    image: string;
    imageOverride?: string;
    overrideUrl?: string;

    location: string;
    description: string;

    backgroundColor?: string;
    date: dayjs.Dayjs;

    timeToRead: string;
};
