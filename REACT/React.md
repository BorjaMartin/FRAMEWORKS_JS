# React

Created: Mar 22, 2020 12:56 PM

![https://velopert.com/wp-content/uploads/2016/03/react.png](https://velopert.com/wp-content/uploads/2016/03/react.png)

[Empezando - React](https://es.reactjs.org/docs/getting-started.html)

# PRIMEROS PASOS

Instalar ultima versión de NodeJs: https://nodejs.org/es/download/
`> npm install -g npm@latest`
`> npm cache clean --force`

Installamos paquete de Create React APP y creamos proyec
`> npm install -g create-react-app`
`> create-react-app <nombre de proyeccto>`

Iniciamos el servidor en la carpeta del proyecto:

`> npm start`

→ [http://localhost:3000/](http://localhost:3000/)

[JSX](https://www.notion.so/JSX-afb27933e9ed46da9863518f4cb37a6d)

## Estructura

- `README.md`
- `package.json` - Archivo de configuración
- `src/index.js` - Cargar e importar lo principal de React → Hoja de estilos, componentes, librerías, renderizar componentes....
- `src/index.css` - Hoja de estilos
- `logo.svg`
- `src/App.test.js` - Fichero para hacer testing
- `App.js` - Componente
- `App.css` - Estilos del componente App
- `public/index.html` - HTML principal de la página
- `public/manifest.json` - Configuración del PWA (aplicaciones web progresivas)
- `public/favicon.ico`
- `node_modules` - Descargas todas las dependencias y librerias

## Organización

Dentro del directorio src nos creamos la carpeta de `assets` y dentro `assets/images` y `assets/css.` También nos creamos una carpeta `components` donde iremos creando las carpetas y ficheros necesario para cada componente

- `src/index.css` → `src/assets/css/index.css`
- `App.css`→ `src/assets/css/App.css`
- `logo.svg` → `src/assets/images/logo.svg`

# COMPONENTES

Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada. 

Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y devuelven a React elementos que describen lo que debe aparecer en la pantalla.

> **Nota: Comienza siempre los nombres de componentes con una letra mayúscula.**
React trata los componentes que empiezan con letras minúsculas como etiquetas del DOM. Por ejemplo, `<div />` representa una etiqueta div HTML pero `<Welcome />` representa un componente y requiere que `Welcome` esté definido.
Para saber más sobre el razonamiento detrás de esta convención, puedes consultar JSX en profundidad.

Se crea un fichero js con la siguiente estructura básica.

MiComponente.js

```jsx
import React from 'react';

class MiComponente extends React.Component{

    render(){
        return (
            <h1>Hola soy el componente. MiComponente</h1>
        );
    }
}

export default MiComponente;
```

```jsx
//Utilizando destructuring en React
import React,{Component} from 'react';
 
class MiComponente extends Component{
	render(){
        return (
            ... //JSX
        );
    }

}
export default MiComponente;
```

El return del componente solo puede devolver una etiqueta.

ERROR

```jsx
render(){
        return (
            <h1>Hola soy el componente. MiComponente</h1>
            <h2>Segunda etiqeuta de mi componente MiComponente</h2>
        );
    }
```

Formas Correctas

```jsx
render(){
        return (
				<React.Fragment>
                <h1>Hola soy el componente. MiComponente</h1>
                <h2>Segunda etiqeuta de mi componente MiComponente</h2>
        </React.Fragment>
        );
    }
```

```jsx
render(){
        return (
				<div className="mi-componente">
                <h1>Hola soy el componente. MiComponente</h1>
                <h2>Segunda etiqeuta de mi componente MiComponente</h2>
        </div>
        );
    }
```

Crear componentes estáticos.

```jsx
import React,{Component} from 'react';

const MensajeEstatico = () =>{
    return (
        <h1>Mensaje Estático</h1>
    )
}

export default MensajeEstatico;
```

Importamos el componente en el componente principal. (ej. App.js)

```jsx
//Importar componentes
import MiComponente from './components/MiComponente';
```

Cargamos el componente en nuestro código HTML de nuestro componente

```jsx
<MiComponente />
```

# PROPS

Argumentos que podemos pasarle tanto a nuestros componentes funcionales como a los componentes de clase

Las props son de solo lectura

Recomendamos nombrar las props desde el punto de vista del componente, en vez de la del contexto en el que se va a utilizar.

> Todos los componentes de React deben actuar como funciones puras con respecto a sus **props**.
No tratan de cambiar sus entradas, y siempre devuelven el mismo resultado para las mismas entradas.
**El estado** le permite a los componentes de React cambiar su salida a lo largo del tiempo en respuesta a acciones del usuario, respuestas de red y cualquier otra cosa, sin violar esta regla.

# ESTADO

El estado es similar a las props, pero es privado y está completamente controlado por el componente.

Añadir un constructor de clase que asigne el `this.state` inicial

```jsx
constructor(props) {
    super(props);
    this.state = {date: new Date(),
									contador: 0};  
}
```

```jsx
state = {date: new Date(),
									contador: 0};
```

CUIDADO!! en cuanto al significado de `this` en los callbacks de JSX. En JavaScript, los métodos de clase no están ligados por defecto. Si olvidas ligar `this.handleClick` y lo pasas a `onClick`, `this` será `undefined` cuando se llame la función.

Esto no es un comportamiento especifico de React; esto hace parte de como operan las funciones JavaScript. 

Generalmente, si refieres un método sin usar () después de este, tal como `onClick={this.handleClick` , deberías ligar ese método.

```jsx
//Solución 1 - Dentro del constructor
// Este enlace es necesario para hacer que `this` funcione en el callback    
this.handleClick = this.handleClick.bind(this);
```

```jsx
//Solución 2 - Definir los métodos como funciones de flecha
// Esta sintaxis nos asegura que `this` está ligado dentro de handleClick  
// Peligro: esto es una sintaxis *experimental*  
handleClick = () => {    
			console.log('this is:', this);  
}
```

## SetState

`setState()` programa una actualización al objeto estado de un componente. Cuando el estado cambia, el componente responde volviendo a renderizar

No modifiques el estado directamente

```jsx
// Correcto
this.setState({comment: 'Hello'});
```

```jsx
// Incorrecto
this.state.comment = 'Hello';
```

El único lugar donde puedes asignar `this.state` es el constructor.

Las actualizaciones del estado pueden ser asíncronas

React puede agrupar varias invocaciones a `setState()` en una sola actualización para mejorar el rendimiento.

Debido a que this.props y this.state pueden actualizarse de forma asincrónica, no debes confiar en sus valores para calcular el siguiente estado.

Usa una segunda forma de `setState()` que acepta una función en lugar de un objeto. Esa función recibirá el estado previo como primer argumento, y las props en el momento en que se aplica la actualización como segundo argumento:

```jsx
// Incorrecto
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

```jsx
// Correcto
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

Las actualizaciones de estado se fusionan

Cuando invocas a `setState()`, React combina el objeto que proporcionaste con el estado actual.

La fusión es superficial, asi que `this.setState({comments})` deja intacto a `this.state.posts`, pero reemplaza completamente `this.state.comments`.

# MÉTODOS DE CICLO DE VIDA

[http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

---

## render()

Es el único método requerido en un componente de clase.

La función render () debe ser pura, lo que significa que no modifica el estado del componente, devuelve el mismo resultado cada vez que se invoca y no interactúa directamente con el navegador.

Cuando se llama, debe examinar a `this.props` y `this.state` y devolver uno de los siguientes tipos:

- **Elementos de React**
- **Arrays y fragmentos**
- **Portales**
- **String y números**
- **Booleanos o nulos**

> **Nota**
`render()` no será invocado si `shouldComponentUpdate()` devuelve falso.

## constructor()

Si no inicializas el estado y no enlazas los métodos, no necesitas implementar un constructor para tu componente React.

El constructor para un componente React es llamado antes de ser montado. Al implementar el constructor para una subclase `React.Component`, deberías llamar a `super(props)` antes que cualquier otra instrucción. De otra forma, `this.props` no estará definido en el constructor, lo que puede ocasionar a errores.

Normalmente, los constructores de React sólo se utilizan para dos propósitos:

- Para inicializar un estado local asignando un objeto al `this.state`.
- Para enlazar  [manejadores de eventos](https://es.reactjs.org/docs/handling-events.html)  a una instancia.

No debes llamar `setState()` en el `constructor()`. En su lugar, si su componente necesita usar el estado local, asigna directamente el estado inicial al `this.state` directamente en el constructor:

El constructor es el único lugar donde debes asignar `this.state` directamente. En todos los demás métodos, debes usar `this.setState()` en su lugar.

```jsx
constructor(props) {
  super(props);
  // No llames this.setState() aquí!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

> **Nota**
**¡Evita copiar los props en el estado!** 

El problema es que es innecesario (puedes usar `this.props.color` directamente en su lugar), esto crea errores (actualizaciones al prop `color` no se reflejarán en el estado).
**Sólo utiliza este patrón si deseas ignorar intencionalmente las actualizaciones de prop**. En ese caso, tiene sentido renombrar el prop a `initialColor` o `defaultColor`. Puedes forzar al componente a “limpiar” su estado interno cambiando su key cuando sea necesario.

```jsx
constructor(props) {
 super(props);
 // No hagas esto!
 this.state = { color: props.color };
}
```

## componentDidMount()

Se invoca inmediatamente después de que un componente se monte (se inserte en el árbol). La inicialización que requiere nodos DOM debería ir aquí. Si necesita cargar datos desde un punto final remoto, este es un buen lugar para instanciar la solicitud de red.

*Este método es un buen lugar para establecer cualquier suscripción. Si lo haces, no olvides darle de baja en componentWillUnmount().*

## componentDidUpdate()

Se invoca inmediatamente después de que la actualización ocurra. Este método no es llamado para el renderizador inicial.

*Use esto como una oportunidad para operar en DOM cuando el componente se haya actualizado. Este es también un buen lugar para hacer solicitudes de red siempre y cuando compare los accesorios actuales con los anteriores (por ejemplo, una solicitud de red puede no ser necesaria si los props no han cambiado).*

> **Nota**
`componentDidUpdate()` no será invocado si `shouldComponentUpdate()` devuelve falso.

## componentWillUnmount()

Se invoca inmediatamente antes de desmontar y destruir un componente

*Realiza las tareas de limpieza necesarias en este método, como la invalidación de temporizadores, la cancelación de solicitudes de red o la eliminación de las suscripciones que se crearon en `componentDidMount()`*

No debes llamar `setState(`) en `componentWillUnmount()` porque el componente nunca será vuelto a renderizar. Una vez que una instancia de componente sea desmontada, nunca será montada de nuevo.

# ROUTING Y NAVEGACIÓN

Instalar React Router DOM

`> npm install --save react-router-dom`

## Rutas por componente

`import { BrowserRouter, Route , Switch } from 'react-router-dom';`

Componente Router:

```jsx
import React, {Component} from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';

class Router extends Component{

    render(){
        return(
            <BrowserRouter>

            {/* CONFIGURAR RUTAS Y PAGINAS */}
                <Switch>
                    <Route exact path="/" component={<Componente>} />
										<Route exact path="/pagina-aux" component={<Componente>} />
										<Route component={Error} />
                </Switch>

            </BrowserRouter>
        );
    }

}

export default Router;
```

## Ruta "por render"

```jsx
<Route exact path="/pagina" render={()=> (
                        <h1>Pagina por ruta</h1> ...
                    )} />
```

# Redirect

`import {Redirect} from 'react-router-dom';`

Ejemplo:

```jsx
//Definir ruta en nuestro componente Router
<Route exact path="/redirect/:search" render={
                            (props) => {
                                var search = props.match.params.search;
                                return (
                                    <Redirect to={'/blog/busqueda/'+search}  />
                                );
                            }
                    } />
```

```jsx
//Llamada a la ruta de redirecciones con el parametro
render() {

        if(this.state.redirect){
            return (
                <Redirect to={'/redirect/'+this.state.search}></Redirect>
            );
        }
```

## Parámetro URL

```jsx
<Route exact path="/pruebas/:id" render={(props) => {
        var id = props.match.params.id;

        return (
            <div id="content">
                <h1 className="subheader" >Pagina de pruebas parametros</h1>
                <h2>{id}</h2>
            </div>
        )
    }
} />
```

```jsx
<Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {

    var nombre = props.match.params.nombre;
    var apellidos = props.match.params.apellidos;
...
```

:param - *Parámetro obligatorio*
:param? - *Parámetro opcional*

# HTTP y PETICIONES ASÍNCRONAS

Utilizando Axios.  

[AXIOS](https://www.notion.so/AXIOS-94f5ebf0bf744df8a0273c741d502975)

```jsx
import axios from 'axios';
...
//Petición get por api rest
	axios.get("http://localhost:3900/api/articles")
	...

```

```jsx
axios.get("http://localhost:3900/api/articles")
                .then(res => {
                    console.log(res.data);
                });
```

# LIBRERIA FECHAS

[react-moment](https://www.npmjs.com/package/react-moment)

momentjs `npm install —save moment`

Importar libreria `import Momment from 'react-moment';`

react-moment`npm install --save react-moment`

Importar idioma español `import 'moment/locale/es';`

```jsx
//Hace X dias
<Moment locale="es" fromNow>{article.date}</Moment>
```

# Componente NavLink

`import { NavLink }from 'react-router-dom';`

# Componente LINK

`import {Link } from 'react-router-dom';`

# CREAR NUEVO ARTICULO EN API.

## Subir Imagen

```jsx
//Sacar id del articulo guardado
var articleId = this.state.article._id;
//Crear form data y añadir fichero
const formData = new FormData();
FormData.append(
    'File0',
    this.state.selectedFile,
    this.state.selectedFile.name
);
//Petición ajax
```

# VALIDACIONES FORMULARIOS

## Simple React Validator

*Libreria para validaciones de formularios*

[simple-react-validator](https://www.npmjs.com/package/simple-react-validator)

Libreria `npm install --save simple-react-validator`

Importar `import SimpleReactValidator from 'simple-react-validator';`

Cargar el componente en WillMount():

```jsx
componentWillMount(){
      this.validator = new SimpleReactValidator();
  }
```

Validación en campo de formulario.

```jsx
<form className="mid-form" onSubmit={this.crearArticulo} >
        <div className="form-group">
            <label htmlFor="title">Titulo</label>
            <input type="text" name="title" />

            {this.validator.message('title', this.state.article.title, 'required|alpha')}

        </div>
...
</form>
```

Mostrar mensaje de validación. *En el evento del OnSubmit().*

```jsx
if(this.validator.allValid()){
	...
}else{
    this.validator.showMessages();
    this.forceUpdate();
}
```

Personalizar los mensajes de validación.

```jsx
this.validator = new SimpleReactValidator({
    message: {
        required:'Este campo es requerido'
    }
});
```

## sweetalert

*Libreria para alertas pop up*

[SweetAlert](https://sweetalert.js.org/guides/)

Instalar libreria `npm install —save sweetalert`

Importar libreria `import swal from 'sweetalert'`

Ejemplo.

```jsx
//Alerta
swal(
    'Artículo creado',
    'Artículo creado correctamente',
    'success'
)
```