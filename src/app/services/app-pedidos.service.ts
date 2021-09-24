import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemPedido } from '../interfaces/pedidos';
import { Produto } from '../interfaces/produto';

const urlBase = 'https://servejsoneoc.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class AppPedidosService {

  produtos: Produto[] = [];
  itens: ItemPedido[] = [];

  constructor(private http: HttpClient) { }

  listarCardapio() {
    return this.http.get<Produto[]>(`${urlBase}/cardapio?_sort=name`)
  }

  

  adicionaProduto(produto: Produto) {
    const item = this.itens.find(item => item.produto.descricao == produto.descricao);
    if (item) {
      item.quantidade++;
    } else {
      this.itens.push({
        produto: produto,
        quantidade: 1
      });
    }
  }

  getQuantidadeTotal() {
    let total = 0;
    for (let item of this.itens) {
      total += item.quantidade;
    }
    return total;
  }

  getPrecoTotal() {
    let total = 0;
    for (let item of this.itens) {
      total += item.quantidade * item.produto.preco;
    }
    return total;
  }

  limpa() {
    return this.itens = [];
  }
}
