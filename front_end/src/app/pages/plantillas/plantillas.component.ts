import {Component, Input, OnInit} from '@angular/core';
import {Plantilla} from "../../interfaces";
import { ActivatedRoute } from '@angular/router';
import { PlantillasService } from 'src/app/services/plantillas.service';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.scss']
})
export class PlantillasComponent implements OnInit{

  @Input() plantilla?: Plantilla;

  public id: string | null = "";
  //public plantilla? : Plantilla;
  
  constructor(
    public activatedRoute: ActivatedRoute,
    public plantillaService: PlantillasService
  ){
  
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.obtenerPlantilla()
  }
  

   // Obtenemos los datos de la plantilla
  obtenerPlantilla(){
    this.plantillaService.getPlantilla(this.id).subscribe({
      next:(plant) => {
        this.plantilla = plant
        console.log(this.plantilla)
      },
      error:(e)=>{
        console.log(e)
      },
      complete:() => {
        console.log('Llamada completada')
      }
    })
  }

}
