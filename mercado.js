/* Mercado do Aninha */

const listaDeProdutos = [
  {
    nomeDoProduto: "Café",
    preco: 4,
    estoque: 5,
  },
  {
    nomeDoProduto: "Suco",
    preco: 10,
    estoque: 2,
  },
  {
    nomeDoProduto: "Danone",
    preco: 8,
    estoque: 3,
  },
  {
    nomeDoProduto: "Arroz",
    preco: 30,
    estoque: 9,
  },
  {
    nomeDoProduto: "Feijão",
    preco: 20,
    estoque: 10,
  },
];

/* Exemplo map para aumentar o estoque de todos os produtos a partir de um param */
const aumentaEstoque = (numeroDeUnidadesRecebidas) => {
  listaDeProdutos.map((produto) => {
    produto.estoque += numeroDeUnidadesRecebidas;
  });
};

const daDescontoParaLojaInteira = (numeroEmReiasDeDesconto) => {
  listaDeProdutos.map((valorDoProduto) => {});
};

const aumentarPrecoPorcentagem = (porcentagemAumento) => {
  listaDeProdutos.map((produto) => {
    produto.preco *= 1 + porcentagemAumento / 100;
  });
};
// aumentarPrecoPorcentagem(30);

console.log("antes", listaDeProdutos);
aumentarPrecoPorcentagem(100);
console.log("depois", listaDeProdutos);
aumentarPrecoPorcentagem(100);
// console.log("mais depois ainda", listaDeProdutos);

// 0a Missão Criar uma função que dá desconto em reais todos items
/* 1a Missão Criar um array com o nome de todos os produtos disponíveis no mercado.(Map) */
/* 2a Missão Aumentar o preço de todos os itens em x%, mostrando o índice do item no array */
/* 3a Missão Criar um array com itens que custam mais que 20 R$ (filter) */
/* 4a Missão Devolver um item a partir de seu nome (find)*/
// 5a Alterar o estoque de um item (find)
// 6a Alterar o dado de um item (find)
/* 7a Missão Saber quantos R$ valem todos os produtos. */
