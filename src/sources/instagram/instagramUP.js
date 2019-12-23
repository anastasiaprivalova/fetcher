import { getSubstring } from './../../utils';
import { embedder } from './../../components/embedder';

export default function instagramUrlParser(url) {
    if (!url) {
        console.error('Please, provide url');
        return;
    }

    const id = getSubstring({ start: '/p/', end: '/', str: url });
   
    if (!id) {
        console.error('Please, provide correct url');
        return;
    }

    embedder({ url: `https://instagram.com/p/${id}/media/?size=l`, width: '1080px', height: '1080px' });
}