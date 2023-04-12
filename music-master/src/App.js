import React, { Component } from 'react';
import Search from './components/Search';
import Artist from './components/Artist';
import Tracks from './components/Tracks';

class App extends Component {
    state = { artist: null, tracks: [] };

    searchArtist = (artistQuery) => {
        fetch('https://spotify-api-wrapper.appspot.com/artist/' + artistQuery)
        .then(response => response.json())
        .then(json =>  {
            if (json.artists) {
                this.setState({ artist: json.artists.items[0] });
                fetch('https://spotify-api-wrapper.appspot.com/artist/' + json.artists.items[0].id + '/top-tracks')
                .then(response => response.json())
                .then(json => { this.setState({ tracks: json.tracks })}).catch(error => alert(error.message))
            }
        }).catch(error => alert(error.message));
    }

    render() {
        return (
            <div>
                <Search searchArtist={ this.searchArtist }/>
                <Artist artist={ this.state.artist }/>
                <Tracks tracks={ this.state.tracks }/>
            </div>
        );
    }
}

export default App;