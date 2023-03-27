import React, { Component } from 'react';

const Joke = ({ joke: { setup, punchline }}) => (
    <p style={{margin: 20}}>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
    state = { joke: {}, jokes: [] };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({ joke: json }))
        .catch(error => console.log(error.message));
    }

    fetchTenJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({ jokes: json }))
        .catch(error => console.log(error.message));
    }

    render() {
        return  (
            <div>
                <div>
                    <h2>Highlighted Joke</h2>
                    <Joke joke = {this.state.joke}/>
                </div>
                <hr />
                <div>
                    <h2>Interested in 10 more jokes?</h2>
                    <button onClick={this.fetchTenJokes}>
                        Let's Go!
                    </button>
                    <h3>Ta Da!!!</h3>
                    {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}
                </div>
            </div>
        )
    }
}

export default Jokes;