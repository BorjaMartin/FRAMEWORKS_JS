import React, { Component } from 'react';

import {Redirect, Link} from 'react-router-dom';

class Sidebar extends Component {

    searchRef = React.createRef();

    state = {
        search: "" ,
        redirect: false
    }

    buscar = (e) => {
        e.preventDefault();
        
        var busqueda = this.searchRef.current.value;

        this.setState({
            search: busqueda,
            redirect: true
        })
        
        console.log("Search2 " + this.state.search);
    }


    render() {

        if(this.state.redirect){
            return (
                <Redirect to={'/redirect/'+this.state.search}></Redirect>
            );
        }

        return (
            <aside id="sidebar">
                {this.props.blog === "true" &&
                    <div id="nav-blog" className="sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        <Link to={'/blog/newArticle'} className="btn btn-success">Crear artículo</Link>
                    </div>
                }

                {this.props.search  === "true" &&
                    <div id="search" className="sidebar-item">
                        <h3>Buscador</h3>
                        <p>Encuentra el artículo que buscas</p>
                        <form onSubmit={this.buscar}>
                            <input type="text" name="search" ref={this.searchRef}/>
                                <input type="submit" name="submit" value="Buscar" className="btn"  />
                            
                        </form>
                    </div>
                }
            </aside>
        );
    }

}
export default Sidebar;