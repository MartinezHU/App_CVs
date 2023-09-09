import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {PlantillasComponent} from "./pages/plantillas/plantillas.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'plantilla/:id', component: PlantillasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
