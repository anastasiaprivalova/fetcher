
import { embedder } from './../../components/embedder';

const youtubeKey = '';

export default function youtubeSearchHandler(query) {
    const sanitizedQuery = query.replace(/\W/g, '');

    if (sanitizedQuery.length) {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${sanitizedQuery}&key=${youtubeKey}&maxResults=1`)
            .then(responce => responce.json())
            .then(result => {
                const video = result && result.items && result.items[0];

                if (video) {
                    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
                    embedder({ url, width: '75vw', height: '75vh' });
                }
            })
            .catch(e => console.error(e));
    } else {
        console.error('Use only letters, numbers or _ for your query');
    }
};