import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


import imagedefault from '../assets/images/default.jpg';

import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert'
import axios from 'axios'
import Global from '../Global'
import Sidebar from './Sidebar';

//Validación de formularios y alertas


class CreateArticle extends Component {

    url = Global.url;

    tituloRef = React.createRef();
    contenidoRef = React.createRef();
    imagenRef = React.createRef();


    state = {
        article: {},
        status:null,
        selectedFile : null
    }

    componentWillMount(){
        this.validator = new SimpleReactValidator({
            message: {
                required:'Este campo es requerido'
            }
        });
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.tituloRef.current.value,
                content: this.contenidoRef.current.value,
                
            }
        });

        
        this.validator.showMessages();
        this.forceUpdate();
        
    }

    
    //Hacer peticion http por POST para guardar articulo
    saveArticle = (article) => {
        
        axios.post(this.url + "save", article)
            .then(res => {
                if (res.data.article) {
                    this.setState({
                        article: res.data.article,
                        status: 'waiting',
                    })

                    //Alerta
                    swal(
                        'Artículo creado',
                        'Artículo creado correctamente',
                        'success'
                    );

                    //Subir la imagen
                    if(this.state.selectedFile !== null){
                        //Sacar id del articulo guardado
                        var articleId = this.state.article._id;
                        //Crear form data y añadir fichero
                        const formData = new FormData();
                        formData.append(
                            'file0',
                            this.state.selectedFile,
                            this.state.selectedFile.name
                        );

                        //Petición ajax
                        axios.post(this.url + "upload-image/" + articleId, formData)
                            .then(res => {
                                if(res.data.article){
                                    this.setState({
                                        article: res.data.article,
                                        status: 'success',
                                    })
                                }else{
                                    this.setState({
                                        article: res.data.article,
                                        status: 'failed',
                                    })   
                                }
                            });


                    }else{
                        this.setState({
                            status: 'success'
                        })
                    }

                } else {
                    this.setState({
                        status: 'failed'
                    })
                }

            })

    }


    crearArticulo = (e) => {
        e.preventDefault();
       
        //Rellenar state con datos de formulario
        this.changeState();
        
        if(this.validator.allValid()){
            this.saveArticle(this.state.article);
        }else{
            this.setState({
                status: 'failed'
            })

            this.validator.showMessages();
            this.forceUpdate();
        }

        

    }


    fileChange = (event) =>{
        this.setState({
            selectedFile: event.target.files[0]
        })
    }


    render() {

        if(this.state.status === 'success'){
            return (
                <Redirect to="/blog"></Redirect>
            );
        }

        return (
            
            <div className="center">

                <section id="content">

                    <h1 className="subheader">Crear articulo</h1>

                    <form className="mid-form" onSubmit={this.crearArticulo} >
                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" ref={this.tituloRef} onChange={this.changeState} />

                            {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}

                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="Contenido" ref={this.contenidoRef} onChange={this.changeState} /> 

                            {this.validator.message('content', this.state.article.title, 'required')}
                        </div>


                        <div className="form-group">
                            <div className="image-thumb" >
                                <img src={imagedefault} alt="imagen default" />
                                <input type="file" name="file0" onChange={this.fileChange}></input>
                            </div>
                        </div>


                        <div className="clearfix"></div>

                        <input type="submit" value="Guardar" className="btn btn-success" />



                    </form>


                </section>
                <Sidebar
                    blog="false"
                    search="true"
                />

            </div>
        );
    }
}

export default CreateArticle;
