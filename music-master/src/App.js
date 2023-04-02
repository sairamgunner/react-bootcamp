import React, { Component } from 'react';
import Artist from './components/Artist';

class App extends Component {
    state = { artistQuery: null, artist: null, tracks: [] };

    updateArtistQuery = event => {
        this.setState({ artistQuery: event.target.value });
    }

    searchArtist = () => {
        fetch('https://spotify-api-wrapper.appspot.com/artist/' + this.state.artistQuery)
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

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h2>
                        Music Master
                    </h2>
                    <input 
                        onChange={ this.updateArtistQuery }
                        onKeyDown={ this.handleKeyPress }
                        placeholder='Search for an Artist'/>
                    <button onClick={ this.searchArtist }>Search</button>
                </div>
                <Artist artist={ this.state.artist }/>
            </div>
        );
    }
}

export default App;