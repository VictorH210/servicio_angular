import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor( private http: HttpClient ) { }

  invocable_1() {
    let dato = "Función 1 invocada";
    return dato;
  }

  invocable_2() {
    let dato = "Función 2 invocada";
    return dato;
  }

  invocable_3() {
    let dato = "Función 3 invocada";
    return dato;
  }
  sumar1(numero:any){
    let dato = 5
    return (dato + numero)
  }
  sumar2(numero:any, numero2:any){
    let dato = 5;
    return (dato + numero + numero2)
  }
  calcular_promedio(numero1:any,numero2:any){
    let promedio = (numero1 + numero2)/2;
    return promedio;
  }
}
