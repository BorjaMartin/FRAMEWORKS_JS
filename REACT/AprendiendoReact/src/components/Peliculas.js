import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Peliculas extends Component {

    state = {
        peliculas: [
            { titulo: 'Batman Begin', imagen: 'https://images-na.ssl-images-amazon.com/images/I/71BTH8VUA7L._SY445_.jpg' },
            { titulo: 'Gran Torino', imagen: 'https://images-na.ssl-images-amazon.com/images/I/91cpBX3kNrL._SL1500_.jpg' },
            { titulo: 'Looper', imagen: 'https://images-na.ssl-images-amazon.com/images/I/71YHgMctCEL._SL1000_.jpg' }
        ],
        nombre: 'Borja Martín',
        favorita: ''

    };

    cambiarTitulo = () => {

        var { peliculas } = this.state;
        peliculas[0].titulo = "Batman"

        this.setState({
            peliculas: peliculas
        })
    }

    favorita = (pelicula, indice) => {
        this.setState({
            favorita: pelicula,
            indice: indice
        })
    }


    render() {

        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }

        return (

            <div id="peliculas">
                <Slider
                    title="Peliculas"
                    size="slider-small"
                />
                <div className="center">
                    <section id="content" className="Peliculas">
                        <h2 className="subheader">Listado de Peliculas</h2>
                        <p>Selección de peliculas de {this.state.nombre}</p>
                        <p> <button onClick={this.cambiarTitulo}> cambiar Titulo</button></p>

                        {this.state.favorita.titulo &&
                            <p className="favorita" style={pStyle} >
                                <strong>La Pelicula Favorita es: </strong>
                                <span>{this.state.indice}. {this.state.favorita.titulo}</span>
                            </p>
                        }

                        <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            indice={i}
                                            marcarFAV={this.favorita} />
                                    )
                                })
                            }


                        </div>

                    </section>
                    <Sidebar
                        blog="false"
                        search="true"
                    />
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default Peliculas;
