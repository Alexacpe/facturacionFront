import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  clientes:Cliente[];

  constructor(private clienteService: ClientesService){

  }

 ngOnInit(): void {
  this.clienteService.getClietes().subscribe(
    clientes => this.clientes = this.clientes
  );
 }
}
