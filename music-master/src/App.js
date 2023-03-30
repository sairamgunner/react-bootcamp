import React, { Component } from 'react';

class App extends Component {
    state = { artistQuery: '', artistId: null };

    updateArtistQuery = event => {
        this.setState({ artistQuery: event.target.value });
    }

    searchArtist = () => {
        fetch('https://spotify-api-wrapper.appspot.com/artist/' + this.state.artistQuery)
        .then(response => response.json())
        .then(json =>  {
            if (json.artists > 0) {
                this.setState({ artistId: json.artists.items[0].id })
            }
            fetch('https://spotify-api-wrapper.appspot.com/artist/' + this.state.artistId + '/top-tracks')
            .then(response => console.log(response.json()))
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