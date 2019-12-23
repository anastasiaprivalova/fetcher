import { getSubstring } from './../../utils';
import { embedder } from './../../components/embedder';

export default function youtubeUrlParser(url) {
    if (!url) {
        console.error('Please, provide url');
        return;
    }

    const idRetreivingPlans = [
        { start: 'v=', end: '&' },
        { start: 'youtu.be/', end: '?' },
    ];
    let id = '';
    
    for (let plan of idRetreivingPlans) {
        const substring = getSubstring({ start: plan.start, end: plan.end, str: url });

        if (substring) {
            id = substring;
            break;
        }
    }
    
    if (!id) {
        console.error('Please, provide correct url');
        return;
    }

    //embedder({ url: 'https://www.youtube.com/embed/8HoZQQFwXmQ', width: '75vw', height: '75vh' });
    embedder({ url: `https://www.youtube.com/embed/${id}`, width: '75vw', height: '75vh' });
}