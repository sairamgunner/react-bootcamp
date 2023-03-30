import React, { Component } from 'react';

class App extends Component {
    state = { artistQuery: '', artistId: '' };

    updateArtistQuery = event => {
        console.log('event.target.value', event.target.value);
        this.setState({ artistQuery: event.target.value });
    }

    searchArtist = () => {
        console.log('searching for artist this.state', this.state);
        fetch('https://spotify-api-wrapper.appspot.com/artist/' + this.state.artistQuery)
        .then(response => console.log(response.json()))
        // .then(json =>  this.setState({ artistId: json.items[0].id } ))
        // .then(json =>  console.log(json.items[0].id));
        // .then(json =>  console.log(json));
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