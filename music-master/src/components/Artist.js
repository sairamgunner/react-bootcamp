import React from 'react';

const Artist = ({ artist }) => {
    if (!artist) return null;

    const { images, name, genres, followers } = artist;
    // Need to add function to capitalize first letter of each word in Genre

    return (
        <div>
            <h3>{ name }</h3>
            <p>{ followers.total.toLocaleString('en-US') } followers</p>
            <p>{ genres.join(', ')}</p>
            <img 
            src={ images[0] && images[0].url }
            style={{ 
                height:200, 
                width:200,
                borderRadius: 100,
                objectFit: 'cover'
             }}
            />
            <p></p>
        </div>
    )
}

export default Artist;