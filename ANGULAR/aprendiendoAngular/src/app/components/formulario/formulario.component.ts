import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo:string;

  constructor() {
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {    
    //alert(JSON.stringify(this.user));
    console.log(this.user);
  }

  hasDadoCick(){
    //alert("Has pulsado Click");
  }

  hasSalido(){
    //alert("Has salido");
  }

  hasPulsadoEnter(){
    //alert("Has pulsado enter");
  }
}
