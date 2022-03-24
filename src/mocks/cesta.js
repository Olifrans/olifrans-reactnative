import logo from "../../assets/logo.png";

const cesta = {
  topo: {
    titulo: "Detalhes da cesta",
  },

  detalhes: {
    nome: "Cesta de verduras",
    logoFazenda: logo,
    nomeFazenda: "Frans Olifrans Farm",
    descricao: "Cesta de produtas especiamente para você e sua familia",
    preco: "R$ 60,00",
    botao: "Compar"
  },

  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      },
    ],
  },
};

export default cesta;
