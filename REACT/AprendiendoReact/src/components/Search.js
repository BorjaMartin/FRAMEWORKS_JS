import React, { Component } from 'react';

import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Search extends Component {

  
    render() {

        var searched = this.props.match.params.search;
        return (
            <div id="blog">
                <Slider
                    title={'Busqueda: ' + searched}
                    size="slider-small"
                />
                <div className="center">
                    <section id="content">
                        <h1>Blog</h1>
                        {/*Listado de articulos que vendran del api rest */}
                        <Articles 
                            search={searched}
                        />
                    </section>
                    <Sidebar
                        blog="true"
                        search="true"
                    />
                </div>
            </div>
        );
    }
}

export default Search;
