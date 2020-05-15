import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'espar'
})

export class EsParPipe implements PipeTransform{
    transform(value: any){

        var espar = "No es numero par";

        if (value % 2 == 0){
            espar = "Es numero par"
        }
        return "El año es: " + value + " "+ espar;
    }
}