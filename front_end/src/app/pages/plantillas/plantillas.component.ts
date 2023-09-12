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
  public formularioContacto!: FormGroup;
  @Input() plantilla?: Plantilla;

  public id: string | null = "";


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
    this.formularioContacto = this.fb.group({
      texto: ['' as string | null, Validators.required]
    });
  }

  nuevoContacto(){
    console.log(this.formularioContacto.value)
    this.plantillaService.setContacto(this.formularioContacto.value).subscribe({
      complete: () =>{
        this.plantillaService.getUltimoContacto().subscribe({
          next: (data)=>{
            this.plantilla?.contacto?.push(data.id)
            this.plantillaService.updatePlantilla(this.plantilla,this.plantilla?.id).subscribe()
          }
        })

      }
    })
  }



  // Obtenemos los datos de la plantilla
  obtenerPlantilla() {
    this.plantillaService.getPlantilla(this.id).subscribe({
      next: (plant) => {
        this.plantilla = plant
        console.log(this.plantilla)
      },
      error: (e) => {
        console.log(e)
      },
      complete: () => {
        console.log('Llamada completada')
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
