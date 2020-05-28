import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items:any;
  editarItem:any = {
    name: ''
  };

  constructor(private con:ConexionService) {
    this.items = this.con.listarItems();
  }

  ngOnInit(): void {
  }

  
  eliminar(item){
    this.con.eliminarItem(item);
  }

  editar(item){
    this.editarItem = item;
  }

  agregarItemEditado(){
    this.con.editarItem(this.editarItem);
  }

}
