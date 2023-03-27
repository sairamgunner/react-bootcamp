import React, { Component } from 'react';

const TITLES = [
    'a software developer',
    'a music lover',
    'a philanthrophist',
    'an Arsenal fan'
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
        this.timeOut = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.animateTitles();
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearInterval(this.timeOut);
    }

    animateTitles = () => {
        // this.titleInterval will contain an ID for the set interval. This ID is required to clear the interval later
        // in the componentWillUnmount() function
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true });
            this.timeOut = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000);
    }

    render() {
        const { fadeIn, titleIndex } = this.state;
        const title = TITLES[titleIndex];
        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title;