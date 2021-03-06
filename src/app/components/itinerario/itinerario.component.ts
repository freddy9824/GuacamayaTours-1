import { Component, OnInit } from "@angular/core";
import { FirestoreService } from "../../services/firebase/firebase.service";

@Component({
  selector: "app-itinerario",
  templateUrl: "./itinerario.component.html",
  styleUrls: ["./itinerario.component.scss"]
})
export class ItinerarioComponent implements OnInit {
  public localizador: string;
  public reserva: any;
  public reservacion: boolean = false;
  public hoteles: any[] = [];
  constructor(private fireService: FirestoreService) {}

  ngOnInit() {}

  buscar() {
    this.fireService.getAll("reservas").subscribe(reservas => {
      this.reserva = reservas.docs.filter(
        r => r.data().localizador === this.localizador
      )[0];
      if (this.reserva) {
        (this.reserva = this.reserva.data()), (this.reservacion = true);
      } else alert("No existe ninguna reserva asociada a este localizador");

      this.fireService.getAll("hoteles").subscribe(hoteles => {
        this.hoteles = hoteles.docs.map(hotel => ({
          ...hotel.data(),
          id: hotel.id
        }));

        this.hoteles = this.hoteles.filter(hotel =>
          this.reserva.itinerario.some(i => i.hotelId == hotel.id)
        );
        if (this.reserva)
          this.reserva.itinerario = this.reserva.itinerario.map(i => ({
            ...i,
            nombreHotel: this.hoteles.filter(h => h.id == i.hotelId)[0].nombre
          }));
      });
    });
  }
}
