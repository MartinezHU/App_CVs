export interface NewResponse {
  plantillas: Plantilla[];
}

export interface Plantilla {
  url:                       string;
  id:                        number;
  nombre:                    string;
  titulo?:                   string;
  subtitulo?:                string;
  fotoPerfil?:               null;
  presentacion?:             string;
  contacto?:                 number[];
  datos_contacto?:           Datos[];
  perfilProfesional?:        number[];
  datos_perfilProfesional?:  Datos[];
  intereses?:                number[];
  datos_intereses?:          Datos[];
  historialEmpleo?:          number[];
  datos_historialEmpleo?:    Datos[];
  historialEducativo?:       number[];
  datos_historialEducativo?: Datos[];
  otros?:                    number[];
  datos_otros?:              Datos[];
  software?:                 number[];
  datos_software?:           Datos[];
  redesSociales?:            number[];
  datos_redesSociales?:      Datos[];
}

export interface Datos {
  url:    string;
  id:     number;
  texto:  string;
  logo?:  string;
}
