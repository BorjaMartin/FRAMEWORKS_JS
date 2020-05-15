import React, { Component } from 'react';

import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Home extends Component {

    render() {
        return (
            <div id="home">
                <Slider
                    title="Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
                    siex="slider-big"
                    btn="Blog" 
                    enlace="/blog"
                    />
                <div className="center">
                    <div id="content">
                        <h1>Últimos articulos</h1>
                        <Articles ultimosArticulos="true"></Articles>
                    </div>
                    <Sidebar 
                        blog="true"
                        search="false"
                    />
                </div>
            </div>
        );
    }
}

export default Home;
