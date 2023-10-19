import { Component, Input, OnInit } from '@angular/core';
import { Plantilla } from "../../interfaces";
import { ActivatedRoute } from '@angular/router';
import { PlantillasService } from 'src/app/services/plantillas.service';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.scss']
})
export class PlantillasComponent implements OnInit {
  public formularioElemento!: FormGroup;
  @Input() plantilla?: Plantilla;


  public id: string | null = "";

  elemento : string[] | undefined = [];

  public elementoPadre: any;

  public elementoHijo: any;
  public elementoDrag: any;
  public idElementoHijo: string | null = "";
  public idElementoDrag: string | null = "";


  //public plantilla? : Plantilla;

  constructor(
    public activatedRoute: ActivatedRoute,
    public plantillaService: PlantillasService,
    public fb: FormBuilder
  ) {

  }

  ngOnInit() {
  
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.obtenerPlantilla()
    this.formularioElemento = this.fb.group({
      texto: ['' as string | null, Validators.required]
    });
  }


  /**
  * Añadimos un nuevo elemento a un bloque de la plantilla en funcion de su tipo
  * @param tipoElemento Tipo de elemento del bloque (Contacto, Historial Educativo, Software, etc)
  */
  nuevoElementoLista(tipoElemento: any,valorElemento: string[] | undefined) {
    this.elemento = valorElemento
    if(!this.elemento){
      this.elemento = []
    }
    this.elemento?.push(this.formularioElemento.value.texto)
    this.plantilla![tipoElemento] = this.elemento

   
    console.log(this.elemento)
    console.log(this.plantilla![tipoElemento])
    this.plantillaService.crearAniadirElemento(this.plantilla!).subscribe()
  }

  eliminarElemento(tipoElemento: any, indice: number) {

      this.plantilla![tipoElemento].splice(indice,1)
      console.log(tipoElemento)

      this.plantillaService.crearAniadirElemento(this.plantilla!).subscribe()
  }
 
  filtrarElementos(elemento:any){
    if (elemento!= 'url' && elemento!='id'){
      return true
    }
    return false
  }

  // Obtenemos los datos de la plantilla
  obtenerPlantilla() {
    this.plantillaService.getPlantilla(this.id).subscribe({
      next: (plant) => {
        this.plantilla = plant
        console.log(plant)
      },
      error: (e) => {
        console.log(e,"d")
      },
      complete: () => {
      }
    })
  }



  /**
   * Funcion encargada de mover e intercambiar los elementos del HTML
   * @param event 
   */
  onDrop(event: CdkDragDrop<void>) {
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;

    // Mueve los contenedores en el DOM
    const containerElement = event.container.element.nativeElement;
    const childElements = containerElement.children;
    const draggedElement = childElements[previousIndex];

    // Variables para almacenar temporalmente las posiciones de los div

    if (currentIndex < previousIndex) {
      containerElement.insertBefore(draggedElement, childElements[currentIndex]);

      this.idElementoHijo = childElements[currentIndex + 1].getAttribute('id')
     
    } else {
      containerElement.insertBefore(draggedElement, childElements[currentIndex + 1]);

      this.idElementoHijo = childElements[currentIndex - 1].getAttribute('id')

    }
    this.idElementoDrag = draggedElement.getAttribute('id')

  }



}
