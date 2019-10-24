import { tipoDeDestino } from './../../../../interfaces/tipo-de-destinos';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTable } from '@angular/material';
import tipos from '../../../../data/tipos.json';

const ELEMENT_DATA: tipoDeDestino[] = tipos;

@Component({
  selector: 'app-lista-categoria-destino',
  templateUrl: './lista-categoria-destino.component.html',
  styleUrls: ['./lista-categoria-destino.component.scss']
})
export class ListaCategoriaDestinoComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'id'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable,  { static: true}) table: MatTable<any>;

  formVisibility = false;

  constructor() { }
  public tipo = tipos;
  Categoria = {
    id: this.tipo.length+1,
    nombre: "",
    foto: ""
  }

  ngOnInit() {
    this.tipo = tipos;
  }

  openCrear() {
    this.formVisibility = true;
  }

  crearCategoria() {
    this.formVisibility = false;
 

  }
}
