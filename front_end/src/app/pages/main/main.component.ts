import {Component, OnInit} from '@angular/core';
import {PlantillasService} from "../../services/plantillas.service";
import {Plantilla} from "../../interfaces";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public plantillas: Plantilla[] = [];
  index: any;

  constructor(
              private plantillasService: PlantillasService,
              public router: Router,
              public location: Location) {
  }

  ngOnInit() {
    this.mostrarPlantillas()
  }

  // Obtenemos los datos de las distintas plantillas
  mostrarPlantillas() {
    this.plantillasService.getPlantillas().subscribe({
   
      next:(resp) => {
        this.plantillas = resp
      
      },
      error: (e) => {
        console.log(e)
      },
      complete: () => console.log('Llamada completada')
      
    })

 
  }



  enlacePlantilla(id: Number) {
    this.router.navigateByUrl(`/plantilla/${id}`)

  }

}
