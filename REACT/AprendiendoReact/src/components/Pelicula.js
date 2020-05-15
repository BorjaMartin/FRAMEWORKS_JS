import React, { Component } from 'react';

//class Pelicula extends Component {

class Pelicula extends Component {

    marcar = () => {
        this.props.marcarFAV(this.props.pelicula, this.props.indice);
    }

    render() {
        const {titulo,imagen} = this.props.pelicula;


        return (

            <article id="article-template" className="article-item">
                <div className="image-wrap">
                    <img src={imagen} alt={titulo} />
                </div>

                <h2>{titulo}</h2>
                <span className="date">
                    Hace 5 minutos
                        </span>
                <a href="infopelicula.html">Leer más</a>
                
                <button onClick={this.marcar}> Favorita </button>
                
                <div className="clearfix"></div>
            </article>

        );

    };


}

export default Pelicula;