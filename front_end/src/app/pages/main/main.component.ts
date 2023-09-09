import {Component, OnInit} from '@angular/core';
import {PlantillasService} from "../../services/plantillas.service";
import {Plantilla} from "../../interfaces";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public plantillas: Plantilla[] = [];
  index: any;

  constructor(private plantillasService: PlantillasService) {
  }

  ngOnInit() {
    this.mostrarPlantillas()
  }

  mostrarPlantillas() {
    this.plantillasService.getPlantillas().subscribe({
   
      next:(resp) => {
        this.plantillas = resp
        console.log('Llamada al metodo') 
      },
      error: (e) => {
        console.log(e)
      },
      complete: () => console.log('Llamada completada')
      
    })

 
  }

}
