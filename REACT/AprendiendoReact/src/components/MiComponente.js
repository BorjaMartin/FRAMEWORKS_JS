import React,{Component} from 'react';
 
class MiComponente extends Component{
    
    render(){

        let receta = {
            nombre: 'Pizza',
            ingredientes : ['Tomate','Queso','Jamon cocido'],
            calorias: 400
        }
        
        
        return (
            <div className="mi-componente">
                <h1>Hola soy el componente. MiComponente</h1>
                <hr />
                <h2>Segunda etiqeuta de mi componente MiComponente</h2>
                <h1>{'Receta de ' + receta.nombre}</h1>
                <h2>{'Calorias: '+ receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente,i) => {
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            )
                        })
                    }
                </ol>
                
                
            </div>
        );
    }
}

export default MiComponente;