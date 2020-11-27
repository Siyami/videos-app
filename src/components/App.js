import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

class App extends React.Component {
    onTermSubmit = async (term) => {
        state = { videos: [], selectedVideo: null };
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({ videos: response.data.items });
    }

    onVideoSelect = (video) => {

    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
        )
    }
}

export default App;