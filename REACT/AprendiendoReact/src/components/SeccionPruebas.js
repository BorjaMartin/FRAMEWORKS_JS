import React, { Component } from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {

    contador = 0;

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            contador: 0
        }

        //This binding is necessary to make `this` work in the callback
        this.sumar = this.sumar.bind(this);
        //this.restar = this.restar.bind(this);
    }

    /*
     state = {
         date: new Date(),
         contador: 0
     }
     */
    sumar() {
        this.setState(state => ({
            contador: (this.state.contador + 1)
        }));
    }

    restar = () => {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }


    render() {
        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>

                <h2 className="subheader">Componentes</h2>
                <MiComponente />
                
                <h2 className="subheader">Estados</h2>
                <p>
                    Fecha: {this.state.date.toLocaleDateString()}
                </p>
                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar} />
                    <input type="button" value="Restar" onClick={this.restar} />
                </p>

            </section>
        );
    }

}
export default SeccionPruebas;
