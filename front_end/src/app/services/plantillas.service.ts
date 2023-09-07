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

}
