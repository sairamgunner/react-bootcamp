import React, { Component } from 'react';
import Projects from './components/Projects';
import Title from './components/Title';
import SocialProfiles from './components/SocialProfiles';
import profile from './assets/profile.jpg';

class App extends Component {
    state = { displayBio: false }

    readMore() {
        this.setState({ displayBio: true });
    }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        let bio = this.state.displayBio ? (
            <div>
                <p>I love to code</p>
                <p>I live in Whitby, ON</p>
                <p>I want to make exceptional quality web applications</p>
                <button onClick={this.toggleDisplayBio}>Collapse</button>
            </div>
        ) : (
            <div>
                <button onClick={this.toggleDisplayBio}>Read More</button>
            </div>
        );

        return (
            <div>
                <img src={profile} className='profile' alt='profile' />
                <h1>Hello!</h1>
                <p>My name is Sairam.</p>
                <Title />
                <p>Always looking forward to working on meaningful projects.</p>
                {bio}
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        );
    }
}

export default App;