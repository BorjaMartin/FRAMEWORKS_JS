import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import axios from 'axios'
import Global from '../Global'

import swal from 'sweetalert'
import logo from '../assets/images/react.svg';

import Moment from 'react-moment';
import 'moment/locale/es';



class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    }


    componentWillMount() {
        this.getArticleId();
    }

    getArticleId = () => {
        var id = this.props.match.params.id;
        axios.get(this.url + "article/" + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: 'success'
                })
            })
            .catch(err => {
                this.setState({
                    article:false,
                    status: 'success'
                });
            });
    }

    deleteArticle = (id) =>{

        swal({
            title: "Estas seguro que desea eliminar el articulo?",
            text: "Si elimina el articulo no podras volver a este articulo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(this.url + "article/" + id)
                .then(res => {
                    this.setState({
                        status: 'deleted'
                    })
                })
    
                swal(
                    'Articulo Eliminado',
                    'Articulo eliminado correctamente',
                    'success'
                );
            } else {
              swal("El articulo no ha sido eliminado!");
            }
          });

   
    }

    render() {

        if(this.state.status === 'deleted'){
            return (
                <Redirect to="/blog"></Redirect>
            );
        }

        return (

            <div className="center">
                <section id="content">

                    {this.state.article &&
                        <article className="article-item article-detail" id="article">
                            <div className="image-wrap">
                                    {this.state.article.image === null || this.state.article.image === undefined ? (
                                        <img src={logo} alt={this.state.article.title} />
                                    ) : (
                                        <img src={this.url + 'get-image/' + this.state.article.image} alt={this.state.article.title} />
                                        )
                                    }
                            </div>

                            <h1 className="subheader"> {this.state.article.title}</h1>
                            <span className="date">
                            <Moment locale="es" fromNow>{this.state.article.date}</Moment>
                        </span>
                            <p>
                               {this.state.article.content}
                            </p>
                            
                                    <button onClick={
                                        () => {
                                            this.deleteArticle(this.state.article._id);
                                        }
                                    } 
                                    className="btn btn-danger">Eliminar</button>
                                    <Link to={"/blog/editArticle/"+this.state.article._id} className="btn btn-warning">Editar</Link>

                            <div className="clearfix"></div>
                        </article>
                    }

                    {!this.state.article && this.state.status === 'succcess' &&
                        <article className="article-item article-detail" id="article">
                            <h1 className="subheader"> El articulo no existe</h1>
                        </article>
                    }

                    {this.state.status == null &&
                        <article className="article-item article-detail" id="article">
                            <h1 className="subheader"> Cargando ... </h1>
                            <p>Espere unos segundos</p>
                        </article>
                    }

                </section>
                <Sidebar
                    blog="true"
                    search="true"
                />
            </div>
        );


     



    }
}
export default Article