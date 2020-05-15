import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService {

    public peliculas : Pelicula[];
    
    holaMundo(){
        return "Hola mundeo desde un servicio de Angular!!!";
    }

    getPeliculas(){
        return [
            new Pelicula('Spiderman 4', 2019, "https://i.pinimg.com/originals/70/9b/45/709b45e308802075eed464a9ab01146e.jpg"),
            new Pelicula('Vengadores End Game', 2020, "https://img.europapress.es/fotoweb/fotonoticia_20140816120630_1024.jpg"),
            new Pelicula('Batman vs Superman', 2017, "https://is2-ssl.mzstatic.com/image/thumb/Video123/v4/00/82/31/008231bf-905e-97b6-d793-c21d5f46ed16/DIS_AV_ENDGAME_FINAL_REV_ES_ARTWORK_ES-ES_2000x3000_1OWPBJ00000KFL.lsr/268x0w.jpg")
          ]
    }
}
