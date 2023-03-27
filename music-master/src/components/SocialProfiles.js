import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

class SocialProfile extends Component   {
    render()  {
        // console.log(this.props.socialProfile);
        const { link, image } = this.props.socialProfile;
        return(
            <div style={{display: 'inline-block', margin: 10}}>
                <a href={link}><img src={image} alt='profile' style={{height:35, width: 35}}/></a>
            </div>
        )
    }
}

class SocialProfiles extends Component  {
    render()  {
        return(
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return  (
                                // <div key={SOCIAL_PROFILE.id}>{SOCIAL_PROFILE.image}</div>
                                <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;