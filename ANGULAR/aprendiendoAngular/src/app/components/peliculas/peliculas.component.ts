import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})

export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;



  constructor(
    private _peliculaService:PeliculaService
  ) {
    this.titulo = "Lista de peliculas";
    this.peliculas = this._peliculaService.getPeliculas();

  }


  //Se ejcuta cuando cargamos la etiqueta de nuestro componente.
  ngOnInit(): void {
  }

  //Se ejecuta cada vez que se produce un cambio
  ngDoCheck(): void {

  }

  cambiarTitulo() {
    this.titulo = "Titulo Nuevo de app-peliculas";
    //mostrarPelicuas = false;
  }

  //Se ejecuta antes de eliminar la instancia del componente
  ngOnDestroy() {
  }

  mostrarFav(event) {
    this.favorita = event.pelicula;

  }

}
