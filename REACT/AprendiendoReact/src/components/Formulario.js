import React, { Component } from 'react';




class Formulario extends Component {

    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    hombreRef = React.createRef();
    mujeRef = React.createRef();
    otroRef = React.createRef();
    
    state = {
        user: {}
    }

    recibirFormulario = (e) => {
        e.preventDefault();

        var genero = 'hombre';

        if (this.hombreRef.current.checked){
            genero = this.hombreRef.current.value;
        }else if (this.mujeRef.current.checked){
            genero = this.mujeRef.current.value;
        }else{
            genero = this.otroRef.current.value;
        }


        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        }

        this.setState({
            user: user
        })
        
 
    }


    render() {
        return (
            <div id="formulario">
                    <h1 className="subheader">Formulario</h1>
                    {this.state.user.nombre &&
                        <div id="user-data">
                            <p>Nombre: <strong>{this.state.user.nombre}</strong> </p>
                            <p>Appellidos: <strong>{this.state.user.apellidos}</strong> </p>
                            <p>Bio: <strong>{this.state.user.bio}</strong> </p>
                            <p>Genero: <strong>{this.state.user.genero}</strong> </p>
                        </div>
                    }
                    <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario} >
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" ref={this.nombreRef} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" ref={this.apellidosRef}  />
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio">Biografia</label>
                            <textarea name="bio" ref={this.bioRef}  ></textarea>
                        </div>

                        <div className="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" ref={this.hombreRef} /> Hombre
                            <input type="radio" name="genero" value="mujer" ref={this.mujeRef}  /> Mujer
                            <input type="radio" name="genero" value="otro" ref={this.otroRef} /> Otro
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Enviar" className="btn btn-success" />

                    </form>
            </div>
        );
    }
}

export default Formulario;
