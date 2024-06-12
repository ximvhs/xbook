import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MedicComponent } from "./medic.component";
import { GeneralComponent } from "./general/general.component";
import { DetailComponent } from "./detail/detail.component";

const routes: Routes = [
  {
    path: "",
    component: MedicComponent,
    children: [
      {
        path: "general",
        component: GeneralComponent,
      },
      {
        path: "detail/:id",
        component: DetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicRoutingModule {}
