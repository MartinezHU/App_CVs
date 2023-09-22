import {Component, Input, OnInit} from '@angular/core';
import {Plantilla} from "../../interfaces";
import {ActivatedRoute} from '@angular/router';
import {PlantillasService} from 'src/app/services/plantillas.service';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
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
  elemento: any;


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
  nuevoElementoLista(tipoElemento: string){
    this.plantillaService.crearAniadirElemento(tipoElemento, this.formularioElemento.value, this.plantilla?.id).subscribe()
  }

  eliminarElemento(tipoElemento: string, id:number){
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
      complete: ()=>{
        console.log(document.getElementById('div_contacto')?.getBoundingClientRect().top,'contacto')
        console.log(document.getElementById('div_historial')?.getBoundingClientRect().top,'historial')
      }
    })
  }

  onDrop(event: CdkDragDrop<void>) {
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;

    // Mueve los contenedores en el DOM
    const containerElement = event.container.element.nativeElement;
    const childElements = containerElement.children;
    const draggedElement = childElements[previousIndex];
    if (currentIndex < previousIndex) {
      containerElement.insertBefore(draggedElement, childElements[currentIndex]);
    } else {
      containerElement.insertBefore(draggedElement, childElements[currentIndex + 1]);
    }
  }

}
