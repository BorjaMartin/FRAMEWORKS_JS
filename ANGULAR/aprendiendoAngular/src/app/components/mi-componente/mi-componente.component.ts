import {Component} from '@angular/core';

@Component({
    selector : 'mi-component',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPelicuas:boolean;    

    constructor(){
        this.titulo = "Hola mundo, soy mi componente";
        this.comentario = "Este es mi primer componente";
        this.year = 2020;
        this.mostrarPelicuas = true;
       
    }

    ocultarPelicuas(){
        this.mostrarPelicuas = false;
    }
}
