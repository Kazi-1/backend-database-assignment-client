import React from 'react';
import facebook from '../../images/icon/facebook.png'
import instagram from '../../images/icon/instagram.png'
import youTube from '../../images/icon/youtube.png'
import twitter from '../../images/icon/twitter.png'

const SocialMedia = () => {
    return (
        <div>
            <h1 style={{ color: '#F86600' }} className="fw-bold my-5">CONNECT WITH US</h1>
          <a target="blank" href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
          <a target="blank" href="https://www.instagram.com/"><img src={instagram} alt="" /></a>
          <a target="blank" href="https://www.youtube.com/"><img src={youTube} alt="" /></a>
          <a target="blank" href="https://twitter.com/home"><img src={twitter} alt="" /></a>
        </div>
    );
};

export default SocialMedia;