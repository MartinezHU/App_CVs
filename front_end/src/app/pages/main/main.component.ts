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
    this.plantillasService.getPlantillas().subscribe((resp: Plantilla[]) => {
      this.plantillas = resp;
    })
  }

}
