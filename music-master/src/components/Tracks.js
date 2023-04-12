import React, { Component } from "react";

class Tracks extends Component {
    state = { playing: false, audio: null, playingPreviewUrl: null };

    toggleAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);
        if(!this.state.playing){
            audio.play();
            this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
        } else {
            this.state.audio.pause();
            this.setState({ playing: false } );

            if(this.state.playingPreviewUrl != previewUrl) {
                audio.play();
                this.setState({ playing: true, audio, playingPreviewUrl: previewUrl })
            }
        }
    }

    render() {
        const { tracks } = this.props;
        
        return (
        <div>
            {
                tracks.map(track => {
                    const { id, album, name, preview_url } = track;

                    return(
                        <div 
                        key={id} 
                        onClick={this.toggleAudio(preview_url)}
                        style={{ 
                            display: 'inline-block'
                         }}>
                            <img 
                            src={album.images[0].url} 
                            alt='track-image'
                            style={{ 
                                height:200, 
                                width:200,
                                objectFit: 'cover'
                             }}/>
                            <p>{name}</p>
                        </div>
                    )

                })
            }
        </div>
        )
    }
}

export default Tracks ;