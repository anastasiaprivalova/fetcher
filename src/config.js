import { embedder } from './components/embedder';

import youtubeUP from './sources/youtube/youtubeUP';
import youtubeSH from './sources/youtube/youtubeSH';

import instagramUP from './sources/instagram/instagramUP';

const SOURCES = {
    YOUTUBE: 'YOUTUBE',
    INSTAGRAM: 'INSTAGRAM',
}

export const config = new Map([
    [
        SOURCES.YOUTUBE,
        {
            label: 'YouTube',
            urlParser: youtubeUP,
            searchHandler: youtubeSH,
        },
    ],
    [
        SOURCES.INSTAGRAM,
        {
            label: 'Instagram',
            urlParser: instagramUP,
        },
    ],
])