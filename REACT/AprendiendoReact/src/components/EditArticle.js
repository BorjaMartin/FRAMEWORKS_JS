import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


import imagedefault from '../assets/images/default.jpg';

import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert'
import axios from 'axios'
import Global from '../Global'
import Sidebar from './Sidebar';

//Validación de formularios y alertas


class EditArticle extends Component {

    url = Global.url;

    Articleid = null;

    tituloRef = React.createRef();
    contenidoRef = React.createRef();
    imagenRef = React.createRef();


    state = {
        article: {},
        newarticle: {},
        status: null,
        selectedFile: null
    }

    componentWillMount() {

        this.Articleid = this.props.match.params.id;

        this.getArticleId();


        this.validator = new SimpleReactValidator({
            message: {
                required: 'Este campo es requerido'
            }
        });
    }

    changeState = () => {

        //this.getArticleId();


        var newarticle = {
            title: this.tituloRef.current.value,
            content: this.contenidoRef.current.value
        }

        this.setState({
            newarticle: newarticle
        });


        this.validator.showMessages();
        this.forceUpdate();

    }

    getArticleId = () => {

        axios.get(this.url + "article/" + this.Articleid)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    newarticle: res.data.article,
                    status: null
                })
            })
            .catch(err => {
                this.setState({
                    article: false,
                    status: null
                });
            });
    }


    //Hacer peticion http por POST para guardar articulo
    saveArticle = (article, id) => {

        axios.put(this.url + "article/" + id, article)
            .then(res => {
                if (res.data.article) {
                    this.setState({
                        article: res.data.article,
                        status: 'waiting',
                    })

                    //Alerta
                    swal(
                        'Artículo modificado',
                        'Artículo modificado correctamente',
                        'success'
                    );

                    //Subir la imagen
                    if (this.state.selectedFile !== null) {
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
                                if (res.data.article) {
                                    this.setState({
                                        article: res.data.article,
                                        status: 'success',
                                    })
                                } else {
                                    this.setState({
                                        article: res.data.article,
                                        status: 'failed',
                                    })
                                }
                            });


                    } else {
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

        if (this.validator.allValid()) {

            this.saveArticle(this.state.newarticle, this.state.article._id);
        } else {
            this.setState({
                status: 'failed'
            })

            this.validator.showMessages();
            this.forceUpdate();
        }



    }


    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }


    render() {

        if (this.state.status === 'success') {
            return (
                <Redirect to="/blog"></Redirect>
            );
        }

        return (

            <div className="center">

                <section id="content">

                    <h1 className="subheader">Editar Articulo</h1>


                    {this.state.article &&
                        <form className="mid-form" onSubmit={this.crearArticulo} >
                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input type="text" name="title" ref={this.tituloRef} onChange={this.changeState} defaultValue={this.state.article.title} />

                                {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}

                            </div>

                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea name="Contenido" ref={this.contenidoRef} onChange={this.changeState} defaultValue={this.state.article.content} />

                                {this.validator.message('content', this.state.article.title, 'required')}
                            </div>


                            <div className="form-group">
                                <div className="image-thumb" >
                                    {this.state.article.image === null ? (
                                        <img src={imagedefault} alt={this.state.article.title} className="thumb" />
                                    ) : (
                                            <img src={this.url + 'get-image/' + this.state.article.image} alt={this.state.article.title} className="thumb" />
                                        )

                                    }
                                    <input type="file" name="file0" onChange={this.fileChange} ></input>
                                </div>
                            </div>


                            <div className="clearfix"></div>

                            <input type="submit" value="Guardar" className="btn btn-success" />



                        </form>


                    }

                    {!this.state.article &&
                        <h2 className="subheader">Cargando Articulo ...</h2>
                    }






                </section>
                <Sidebar
                    blog="false"
                    search="true"
                />

            </div>
        );
    }
}

export default EditArticle;
