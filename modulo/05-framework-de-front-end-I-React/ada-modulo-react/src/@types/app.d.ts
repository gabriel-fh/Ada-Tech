interface ItemCompra {
    item: string;
    quantidade: number;
    valor: number;
  }
  
  interface Prato {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
  }
  
  interface Restaurante {
    nome: string;
    descricao: string;
    avaliacao: null | string | number;
    categoria: string;
    tempoEntrega: number;
    cardapio: Prato[];
  }
  