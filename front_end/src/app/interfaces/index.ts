import { NgIterable } from "@angular/core";

export interface NewResponse {
  plantillas: Plantilla[];
}

export interface Plantilla {
  [key: string]: (string & NgIterable<string>) | null | undefined | any;
  url:                       string;
  id:                        number;
  nombre:                    string;
  titulo?:                   string;
  subtitulo?:                string;
  fotoPerfil?:               any;
  presentacion?:             string;
  contacto?:                 string[];
  perfilProfesional?:        string[];
  intereses?:                string[];
  historialEmpleo?:          string[];
  historialEducativo?:       string[];
  otros?:                    string[];
  software?:                 string[];
  redesSociales?:            any;

}

export interface Datos {
  url:    string;
  id:     number;
  texto:  string;
  logo?:  string;
}
