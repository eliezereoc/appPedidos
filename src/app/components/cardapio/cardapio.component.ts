import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { AppPedidosService } from 'src/app/services/app-pedidos.service';
 
@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  produtos: Produto[] = [];
  constructor(private foodService: AppPedidosService) {
    
  }

  ngOnInit(): void {    
    this.foodService.listarCardapio().subscribe(cardapio => {
      this.produtos = cardapio;        
    });
  }
 
  adicionaProduto(produto: Produto) {
    this.foodService.adicionaProduto(produto);
  }

  get quantidadeTotal() {
    return this.foodService.getQuantidadeTotal();
  }

  get precoTotal() {
    return this.foodService.getPrecoTotal();
  }
  

}
