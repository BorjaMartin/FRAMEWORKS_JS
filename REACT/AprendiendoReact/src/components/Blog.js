import React, { Component } from 'react';

import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Blog extends Component {

  
    render() {

        return (
            <div id="blog">
                <Slider
                    title="Blog"
                    size="slider-small"
                />
                <div className="center">
                    <section id="content">
                        <h1>Blog</h1>
                        {/*Listado de articulos que vendran del api rest */}
                        <Articles />
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

export default Blog;
