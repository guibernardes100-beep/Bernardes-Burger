const PRODUTOS_PADRAO = [
  {
    id: 1,
    nome: "X-BURGUER",
    descricao: "Pão, hambúrguer tradicional, queijo e molho especial.",
    preco: 10,
    categoria: "tradicionais",
    imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 2,
    nome: "X-AMERICANO",
    descricao: "Pão, queijo, presunto, ovo, alface, tomate e molho especial.",
    preco: 12,
    categoria: "tradicionais",
    imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 3,
    nome: "X-MISTO QUENTE",
    descricao: "Pão, presunto, queijo e manteiga.",
    preco: 12,
    categoria: "tradicionais",
    imagem: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 4,
    nome: "X-SALADA",
    descricao: "Pão, hambúrguer tradicional, queijo, alface, tomate e molho especial.",
    preco: 16,
    categoria: "tradicionais",
    imagem: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 5,
    nome: "X-EGG",
    descricao: "Pão, hambúrguer tradicional, queijo, ovo e molho especial.",
    preco: 14,
    categoria: "tradicionais",
    imagem: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 6,
    nome: "X-BAURU",
    descricao: "Pão, hambúrguer tradicional, queijo, presunto, tomate e molho especial.",
    preco: 12,
    categoria: "tradicionais",
    imagem: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 7,
    nome: "X-BACON",
    descricao: "Pão, hambúrguer tradicional, queijo, bacon crocante e molho especial.",
    preco: 15,
    categoria: "tradicionais",
    imagem: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 8,
    nome: "X-CALABRESA",
    descricao: "Pão, hambúrguer tradicional, queijo, calabresa acebolada e molho especial.",
    preco: 17,
    categoria: "tradicionais",
    imagem: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 9,
    nome: "X-BACON DUPLO",
    descricao: "Pão, 2 hambúrgueres tradicionais, queijo, bacon crocante e molho especial.",
    preco: 18,
    categoria: "tradicionais",
    imagem: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 10,
    nome: "X-SALADA DUPLO",
    descricao: "Pão, 2 hambúrgueres tradicionais, queijo, alface, tomate e molho especial.",
    preco: 18,
    categoria: "tradicionais",
    imagem: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 11,
    nome: "X-FRANGO",
    descricao: "Pão francês, filé de frango grelhado, queijo, alface, tomate e molho especial.",
    preco: 19,
    categoria: "tradicionais",
    imagem: "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 12,
    nome: "X-CHURRASCO",
    descricao: "Pão francês, carne de churrasco, queijo, alface, tomate, cebola e molho especial.",
    preco: 20,
    categoria: "tradicionais",
    imagem: "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 13,
    nome: "PRIME 200g",
    descricao: "Pão, hambúrguer artesanal 200g, muçarela, presunto, ovo, bacon, alface, tomate, cebola roxa e maionese caseira.",
    preco: 25,
    categoria: "artesanais",
    imagem: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 14,
    nome: "RÚSTICO 200g",
    descricao: "Pão, hambúrguer artesanal 200g, queijo, cebola e maionese verde.",
    preco: 27,
    categoria: "artesanais",
    imagem: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 15,
    nome: "GRILL 200g",
    descricao: "Pão, hambúrguer artesanal 200g, queijo, cheddar, picles, alface, tomate e maionese especial.",
    preco: 23,
    categoria: "artesanais",
    imagem: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 16,
    nome: "CHICKEN SUPREME",
    descricao: "Pão, filé de frango empanado 200g, queijo, alface americana, tomate e maionese especial.",
    preco: 28,
    categoria: "artesanais",
    imagem: "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 17,
    nome: "BATATA FRITA P",
    descricao: "Batata frita com cheddar, catupiry e bacon.",
    preco: 15,
    categoria: "porcoes",
    imagem: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 18,
    nome: "BATATA FRITA M",
    descricao: "Batata frita com cheddar, catupiry e bacon.",
    preco: 20,
    categoria: "porcoes",
    imagem: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 19,
    nome: "BATATA FRITA G",
    descricao: "Batata frita com cheddar, catupiry e bacon.",
    preco: 30,
    categoria: "porcoes",
    imagem: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 20,
    nome: "CALABRESA ACEBOLADA P",
    descricao: "Porção de calabresa acebolada.",
    preco: 18,
    categoria: "porcoes",
    imagem: "https://static.itdg.com.br/images/640-auto/6747357e8b20df03e3b1920eaf8d29e1/linguica-calabresa-acebolada.jpg",
    ativo: true
  },

  {
    id: 21,
    nome: "CALABRESA ACEBOLADA M",
    descricao: "Porção de calabresa acebolada.",
    preco: 27,
    categoria: "porcoes",
    imagem: "https://static.itdg.com.br/images/640-auto/6747357e8b20df03e3b1920eaf8d29e1/linguica-calabresa-acebolada.jpg",
    ativo: true
  },

  {
    id: 22,
    nome: "CALABRESA ACEBOLADA G",
    descricao: "Porção de calabresa acebolada.",
    preco: 35,
    categoria: "porcoes",
    imagem: "https://static.itdg.com.br/images/640-auto/6747357e8b20df03e3b1920eaf8d29e1/linguica-calabresa-acebolada.jpg",
    ativo: true
  },

  {
    id: 23,
    nome: "PEPSI 1,5L",
    descricao: "Refrigerante Pepsi 1,5L.",
    preco: 11,
    categoria: "bebidas",
    imagem: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 24,
    nome: "COCA ZERO 1L",
    descricao: "Refrigerante Coca-Cola Zero 1L.",
    preco: 10,
    categoria: "bebidas",
    imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 25,
    nome: "COCA-COLA 1,5L",
    descricao: "Refrigerante Coca-Cola 1,5L.",
    preco: 12,
    categoria: "bebidas",
    imagem: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 26,
    nome: "PEPSI ZERO LATA",
    descricao: "Pepsi Zero lata.",
    preco: 6,
    categoria: "bebidas",
    imagem: "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 27,
    nome: "FANTA 200ML",
    descricao: "Refrigerante Fanta 200ml.",
    preco: 3.5,
    categoria: "bebidas",
    imagem: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 28,
    nome: "COCA-COLA 200ML",
    descricao: "Refrigerante Coca-Cola 200ml.",
    preco: 3.5,
    categoria: "bebidas",
    imagem: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=80",
    ativo: true
  }
];


let produtos =
  JSON.parse(localStorage.getItem("bernardesProdutos")) ||
  PRODUTOS_PADRAO;


const formProduto =
  document.getElementById("formProduto");

const listaProdutos =
  document.getElementById("listaProdutos");

const contadorProdutos =
  document.getElementById("contadorProdutos");

const buscaProduto =
  document.getElementById("buscaProduto");

const filtroCategoria =
  document.getElementById("filtroCategoria");

const btnCancelar =
  document.getElementById("btnCancelar");


function salvarProdutos() {

  localStorage.setItem(
    "bernardesProdutos",
    JSON.stringify(produtos)
  );

}


function formatarPreco(valor) {

  return Number(valor).toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  );

}


function categoriaBonita(categoria) {

  const nomes = {
    tradicionais: "Tradicionais",
    artesanais: "Artesanais",
    porcoes: "Porções",
    bebidas: "Bebidas"
  };

  return nomes[categoria] || categoria;

}


function renderizarProdutos() {

  const termo =
    buscaProduto.value
      .toLowerCase()
      .trim();

  const categoriaSelecionada =
    filtroCategoria.value;


  const produtosFiltrados =
    produtos.filter(produto => {

      const correspondeBusca =
        produto.nome
          .toLowerCase()
          .includes(termo);

      const correspondeCategoria =
        categoriaSelecionada === "todos" ||
        produto.categoria === categoriaSelecionada;

      return (
        correspondeBusca &&
        correspondeCategoria
      );

    });


  contadorProdutos.textContent =
    `${produtos.length} produto${produtos.length !== 1 ? "s" : ""}`;


  if (produtosFiltrados.length === 0) {

    listaProdutos.innerHTML = `
      <div class="sem-produtos">
        Nenhum produto encontrado.
      </div>
    `;

    return;
  }


  listaProdutos.innerHTML =
    produtosFiltrados.map(produto => `

      <div class="produto-admin">

        <img
          src="${produto.imagem}"
          alt="${produto.nome}"
          onerror="this.src='https://via.placeholder.com/100?text=Imagem'"
        >


        <div class="produto-admin-info">

          <h3>
            ${produto.nome}
          </h3>


          <p>
            ${produto.descricao}
          </p>


          <p>
            Categoria:
            ${categoriaBonita(produto.categoria)}
          </p>


          <span class="preco-admin">
            ${formatarPreco(produto.preco)}
          </span>


          <span
            class="
              status-admin
              ${
                produto.ativo
                  ? "status-ativo"
                  : "status-inativo"
              }
            "
          >
            ${
              produto.ativo
                ? "ATIVO"
                : "INATIVO"
            }
          </span>

        </div>


        <div class="acoes-produto">

          <button
            class="btn-editar"
            onclick="editarProduto(${produto.id})"
          >
            Editar
          </button>


          <button
            class="btn-status"
            onclick="alterarStatus(${produto.id})"
          >
            ${
              produto.ativo
                ? "Desativar"
                : "Ativar"
            }
          </button>


          <button
            class="btn-excluir"
            onclick="excluirProduto(${produto.id})"
          >
            Excluir
          </button>

        </div>

      </div>

    `).join("");

}


formProduto.addEventListener(
  "submit",
  function (event) {

    event.preventDefault();


    const idCampo =
      document.getElementById("produtoId").value;

    const nome =
      document.getElementById("nome").value.trim();

    const descricao =
      document.getElementById("descricao").value.trim();

    const preco =
      Number(document.getElementById("preco").value);

    const categoria =
      document.getElementById("categoria").value;

    const imagem =
      document.getElementById("imagem").value.trim();

    const ativo =
      document.getElementById("ativo").checked;


    if (idCampo) {

      const id =
        Number(idCampo);

      const indice =
        produtos.findIndex(
          produto => produto.id === id
        );


      if (indice !== -1) {

        produtos[indice] = {
          id,
          nome,
          descricao,
          preco,
          categoria,
          imagem,
          ativo
        };

        mostrarNotificacao(
          "Produto atualizado!"
        );

      }

    } else {

      const novoId =
        produtos.length > 0
          ? Math.max(
              ...produtos.map(
                produto => produto.id
              )
            ) + 1
          : 1;


      produtos.push({
        id: novoId,
        nome,
        descricao,
        preco,
        categoria,
        imagem,
        ativo
      });


      mostrarNotificacao(
        "Produto adicionado!"
      );

    }


    salvarProdutos();

    limparFormulario();

    renderizarProdutos();

  }
);


function editarProduto(id) {

  const produto =
    produtos.find(
      produto => produto.id === id
    );


  if (!produto) {
    return;
  }


  document.getElementById("produtoId").value =
    produto.id;

  document.getElementById("nome").value =
    produto.nome;

  document.getElementById("descricao").value =
    produto.descricao;

  document.getElementById("preco").value =
    produto.preco;

  document.getElementById("categoria").value =
    produto.categoria;

  document.getElementById("imagem").value =
    produto.imagem;

  document.getElementById("ativo").checked =
    produto.ativo;


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function excluirProduto(id) {

  const produto =
    produtos.find(
      produto => produto.id === id
    );


  if (!produto) {
    return;
  }


  const confirmar =
    confirm(
      `Deseja realmente excluir "${produto.nome}"?`
    );


  if (!confirmar) {
    return;
  }


  produtos =
    produtos.filter(
      produto => produto.id !== id
    );


  salvarProdutos();

  renderizarProdutos();

  mostrarNotificacao(
    "Produto excluído."
  );

}


function alterarStatus(id) {

  const produto =
    produtos.find(
      produto => produto.id === id
    );


  if (!produto) {
    return;
  }


  produto.ativo =
    !produto.ativo;


  salvarProdutos();

  renderizarProdutos();


  mostrarNotificacao(
    produto.ativo
      ? "Produto ativado!"
      : "Produto desativado!"
  );

}


function limparFormulario() {

  formProduto.reset();

  document.getElementById("produtoId").value = "";

  document.getElementById("ativo").checked = true;

}


function mostrarNotificacao(mensagem) {

  const notificacao =
    document.getElementById(
      "notificacaoAdmin"
    );


  notificacao.textContent =
    mensagem;


  notificacao.classList.add(
    "mostrar"
  );


  setTimeout(() => {

    notificacao.classList.remove(
      "mostrar"
    );

  }, 2500);

}


btnCancelar.addEventListener(
  "click",
  limparFormulario
);


buscaProduto.addEventListener(
  "input",
  renderizarProdutos
);


filtroCategoria.addEventListener(
  "change",
  renderizarProdutos
);


salvarProdutos();

renderizarProdutos();