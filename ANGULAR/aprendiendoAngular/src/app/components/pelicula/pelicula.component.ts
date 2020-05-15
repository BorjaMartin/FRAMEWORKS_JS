import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Pelicula } from '../../models/pelicula';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() peliculaItem : Pelicula ;
  @Output() marcarFav = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(event,pelicula){
      this.marcarFav.emit({
        pelicula: pelicula
      });
  }

}
