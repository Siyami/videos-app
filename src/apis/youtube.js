import axiois from 'axios';
const KEY = 'AIzaSyAuWXUuk4qjunifQD3WsshLHhBUXNgfJcE';

export default axiois.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
