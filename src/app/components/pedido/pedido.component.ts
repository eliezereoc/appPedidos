import { Component, Input, OnInit } from '@angular/core';
import { ItemPedido } from 'src/app/interfaces/pedidos';
import { AppPedidosService } from 'src/app/services/app-pedidos.service';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  itens: ItemPedido[] = [];

  constructor(private foodServices: AppPedidosService) { }

  ngOnInit(): void {
    this.itens = this.foodServices.itens;
  }

  getPrecoTotal() {
    return this.foodServices.getPrecoTotal();
  }

  limpa(){
    this.itens = this.foodServices.limpa();
  }
}
