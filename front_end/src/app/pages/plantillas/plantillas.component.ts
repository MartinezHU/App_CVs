import {Component, Input, OnInit} from '@angular/core';
import {Plantilla} from "../../interfaces";

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.scss']
})
export class PlantillasComponent implements OnInit{

  @Input() plantilla: Plantilla[] = [];

  ngOnInit() {

  }

}
