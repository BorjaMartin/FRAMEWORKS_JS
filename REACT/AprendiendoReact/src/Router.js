import React, { Component } from 'react';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';

import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Peliculas from './components/Peliculas';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Article from './components/Article';
import Search from './components/Search';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';







class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header />

                {/* CONFIGURAR RUTAS Y PAGINAS */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/blog/article/:id" component={Article} />
                    <Route exact path="/blog/busqueda/:search" component={Search} />
                    <Route exact path="/redirect/:search" render={
                            (props) => {
                                var search = props.match.params.search;
                                return (
                                    <Redirect to={'/blog/busqueda/'+search}  />
                                );
                            }
                    } />

                    <Route exact path="/blog/newArticle" component={CreateArticle} />
                    <Route exact path="/blog/editArticle/:id" component={EditArticle} />


                    <Route exact path="/formulario" component={Formulario} />
                    <Route exact path="/Peliculas" component={Peliculas} />

                    <Route exact path="/pagina2" render={() => (
                        <h1>Pagina 1</h1>
                    )} />

                    <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {

                        var nombre = props.match.params.nombre;
                        var apellidos = props.match.params.apellidos;

                        return (
                            <div id="content">
                                <h1 className="subheader" >Pagina de pruebas parametros</h1>
                                <h2>{nombre}</h2>
                                {nombre && apellidos &&
                                    <React.Fragment>
                                        <hr />
                                        <h2> Nombre y apellidos: {nombre} {apellidos}</h2>
                                    </React.Fragment>
                                }


                            </div>
                        )
                    }
                    } />

                    <Route component={Error} />
                </Switch>
                {/* CONFIGURAR RUTAS Y PAGINAS */}


                <div className="clearfix"></div>

                <Footer />

            </BrowserRouter>
        );
    }

}

export default Router;

