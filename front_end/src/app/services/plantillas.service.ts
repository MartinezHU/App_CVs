import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewResponse, Plantilla} from "../interfaces";

const url = 'http://127.0.0.1:8000'

@Injectable({
  providedIn: 'root'
})
export class PlantillasService {

  constructor(private http: HttpClient) { }

  getPlantillas(): Observable<Plantilla[]> {
    return this.http.get<Plantilla[]>(`${url}/plantilla/`)
  }

  getPlantilla(id: string|null): Observable<Plantilla>{
    return this.http.get<Plantilla>(`${url}/plantilla/${id}/`)
  }

  updatePlantilla(plantilla:Plantilla | undefined, id:number | undefined): Observable<Plantilla>{
    return this.http.put<any>(`${url}/plantilla/${id}/`,plantilla)
  }

  setContacto(contacto:any): Observable<any>{
    console.log(`${url}/contacto/`)
    return this.http.post<any>(`${url}/contacto/`,contacto)
  }

  getUltimoContacto(): Observable<any>{
    return this.http.get<any>(`${url}/contacto/obtener_ultimo_contacto/`)
  }

}
