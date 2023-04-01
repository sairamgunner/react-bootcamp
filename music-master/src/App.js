import React, { Component } from 'react';

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
                console.log('In if condition');
                this.setState({ artist: json.artists });
                fetch('https://spotify-api-wrapper.appspot.com/artist/' + json.artists.items[0].id + '/top-tracks')
                .then(response => response.json())
                .then(json => {
                    this.setState({ tracks: json.tracks })
                })
            }
        })
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    }

    render() {
        return (
            <div>
                <h2>
                    Music Master
                </h2>
                <input 
                    onChange={this.updateArtistQuery}
                    onKeyDown={this.handleKeyPress}
                    placeholder='Search for an Artist'/>
                <button onClick={this.searchArtist}>Search</button>
            </div>
        );
    }
}

export default App;