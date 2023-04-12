import React, { Component } from "react";

class Search extends Component {
    state = { artistQuery: null }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.props.searchArtist(this.state.artistQuery);
        }
    }
    
    updateArtistQuery = event => {
        this.setState({ artistQuery: event.target.value });
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
                    placeholder='Search for an Artist' />
                <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}

export default Search;