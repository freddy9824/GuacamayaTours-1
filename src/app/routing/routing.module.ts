import { PlanearViajeComponent } from './../components/planear-viaje/planear-viaje.component';
import { HotelesComponent } from './../components/hoteles/hoteles.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { DestinosTuristicosComponent} from "../components/destinos-turisticos/destinos-turisticos.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { ListarHotelesComponent } from "../components/hoteles/CRUD/listar/listar-hoteles.component";
import { ListarDestinosTuristicosComponent } from "../components/destinos-turisticos/CRUD/listar/listar-destinos-turisticos.component";
import { CategoriaDestinoComponent } from "../components/categoria-destino/categoria-destino.component";
import { HabitacionesComponent } from "../components/habitaciones/habitaciones.component";
import { OrdenesComponent } from "../components/ordenes/ordenes.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { ItinerarioComponent } from "../components/itinerario/itinerario.component";
import { NosotrosComponent } from "../components/nosotros/nosotros.component";
import { ContactanosComponent } from "../components/contactanos/contactanos.component";
import { ListarEstadoComponent } from "../components/estados/CRUD/listar/listar-estado.component";
import { ListaCiudadComponent } from "../components/ciudades/CRUD/listar/lista-ciudad.component";
import { ListaCategoriaDestinoComponent } from "../components/categoria-destino/CRUD/listar/lista-categoria-destino.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "destinos", component: DestinosTuristicosComponent },
  { path: "hoteles", component: HotelesComponent},
  { path: "planea", component: PlanearViajeComponent},
  { path: "admin/hoteles", component: ListarHotelesComponent },
  { path: "admin/destinos", component: ListarDestinosTuristicosComponent },
  { path: "admin/categorias", component: ListaCategoriaDestinoComponent },
  { path: "habitaciones", component: HabitacionesComponent },
  { path: "ordenes", component: OrdenesComponent },
  { path: "admin/ciudades", component: ListaCiudadComponent },
  { path: "admin/estados", component: ListarEstadoComponent },
  { path: "admin/dashboard", component: DashboardComponent },
  { path: "itinerario", component: ItinerarioComponent },
  { path: "nosotros", component: NosotrosComponent },
  { path: "contactanos", component: ContactanosComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
