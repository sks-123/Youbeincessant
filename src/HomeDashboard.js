import React, { Component } from 'react';

import './Home.css';
import Home from './Home';
import SlideShow from './SlideShow';

const HomeDashboard = () => {
    return (
        <div>
            <Home />
            <SlideShow />
        </div>
    );
}
export default HomeDashboard;