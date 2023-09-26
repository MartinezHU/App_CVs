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
  public pos_contacto: number = 2;
  public pos_historial: number = 1;

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
  nuevoElementoLista(tipoElemento: string) {
    this.plantillaService.crearAniadirElemento(tipoElemento, this.formularioElemento.value, this.plantilla?.id).subscribe()
  }

  eliminarElemento(tipoElemento: string, id: number) {
    this.plantillaService.deleteElemento(tipoElemento, id).subscribe()
  }


  // Obtenemos los datos de la plantilla
  obtenerPlantilla() {
    this.plantillaService.getPlantilla(this.id).subscribe({
      next: (plant) => {
        this.plantilla = plant
      },
      error: (e) => {
        console.log(e)
      },
      complete: () => {
        this.elementoPadre = document.getElementById('div_plantilla')

        let hijos = this.elementoPadre.children;

        console.log(hijos)

        for (let hijo of hijos){
          if(!localStorage.getItem(hijo.id)){
            localStorage.setItem(hijo.id, hijo.style.order) // POSIBLE PROBLEMA
          }
          console.log(localStorage.getItem(hijo.id))
          hijo.style.order = localStorage.getItem(hijo.id)
          
       
  
        }
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
    console.log(previousIndex)
    console.log(currentIndex)

    // Mueve los contenedores en el DOM
    const containerElement = event.container.element.nativeElement;
    const childElements = containerElement.children;
    const draggedElement = childElements[previousIndex];

    console.log(containerElement)
    console.log(childElements)

    // Variables para almacenar temporalmente las posiciones de los div

    if (currentIndex < previousIndex) {
      containerElement.insertBefore(draggedElement, childElements[currentIndex]);

      this.idElementoHijo = childElements[currentIndex + 1].getAttribute('id')
     
    } else {
      containerElement.insertBefore(draggedElement, childElements[currentIndex + 1]);

      this.idElementoHijo = childElements[currentIndex - 1].getAttribute('id')

    }
    this.idElementoDrag = draggedElement.getAttribute('id')

    /*
    console.log(this.idElementoHijo)
    console.log(this.idElementoDrag)
    console.log('--------------------------')*/

    this.cambiarPosicionElementos();

   
  

  }

/**
 * Funcion encargada de cambiar el orden de los elementos alerados por el drag an drop 
 */
  cambiarPosicionElementos(){

    let posHijo = 0;
    let posDrag = 0;

    this.elementoHijo = document.getElementById(this.idElementoHijo!);
    this.elementoDrag = document.getElementById(this.idElementoDrag!);
 



    posHijo = this.elementoDrag.style.order;
    posDrag = this.elementoHijo.style.order;

    this.elementoHijo.style.order = posHijo;
    this.elementoDrag.style.order = posDrag;

    localStorage.setItem(this.idElementoHijo!, this.elementoHijo.style.order);
    localStorage.setItem(this.idElementoDrag!, this.elementoDrag.style.order);

    /*
    console.log(this.elementoHijo, 'Elemento Hijo')
    console.log(this.elementoHijo.style.order, 'Orden Hijo')
    console.log(this.elementoDrag, 'Elemento Drag')
    console.log(this.elementoDrag.style.order, 'Orden Drag')
    */
  }

}
