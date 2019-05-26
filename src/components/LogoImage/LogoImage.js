import React from 'react';

import './LogoImage.css';
import Logo from '../../assets/Gridster-Logo.png';

const LogoImage = () => (
    <div className="LogoImage">
        <img src={Logo} className="LogoImg" />
    </div>
);

export default LogoImage;