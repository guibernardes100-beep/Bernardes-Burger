// ==========================================================
// BERNARDES BURGER
// SCRIPT PRINCIPAL DO SITE
// ==========================================================


// ==========================================================
// PRODUTOS PADRÃO
// ==========================================================

const PRODUTOS_PADRAO = [

  // ========================================================
  // TRADICIONAIS
  // ========================================================

  {
    id: 1,
    nome: "X-BURGUER",
    descricao:
      "Pão, hambúrguer tradicional, queijo e molho especial.",
    preco: 10,
    categoria: "tradicionais",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 2,
    nome: "X-AMERICANO",
    descricao:
      "Pão, queijo, presunto, ovo, alface, tomate e molho especial.",
    preco: 12,
    categoria: "tradicionais",
    imagem:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 3,
    nome: "X-MISTO QUENTE",
    descricao:
      "Pão, presunto, queijo e manteiga.",
    preco: 12,
    categoria: "tradicionais",
    imagem:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 4,
    nome: "X-SALADA",
    descricao:
      "Pão, hambúrguer tradicional, queijo, alface, tomate e molho especial.",
    preco: 16,
    categoria: "tradicionais",
    imagem:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 5,
    nome: "X-EGG",
    descricao:
      "Pão, hambúrguer tradicional, queijo, ovo e molho especial.",
    preco: 14,
    categoria: "tradicionais",
    imagem:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 6,
    nome: "X-BAURU",
    descricao:
      "Pão, hambúrguer tradicional, queijo, presunto, tomate e molho especial.",
    preco: 12,
    categoria: "tradicionais",
    imagem:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 7,
    nome: "X-BACON",
    descricao:
      "Pão, hambúrguer tradicional, queijo, bacon crocante e molho especial.",
    preco: 15,
    categoria: "tradicionais",
    imagem:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 8,
    nome: "X-CALABRESA",
    descricao:
      "Pão, hambúrguer tradicional, queijo, calabresa acebolada e molho especial.",
    preco: 17,
    categoria: "tradicionais",
    imagem:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 9,
    nome: "X-BACON DUPLO",
    descricao:
      "Pão, 2 hambúrgueres tradicionais, queijo, bacon crocante e molho especial.",
    preco: 18,
    categoria: "tradicionais",
    imagem:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 10,
    nome: "X-SALADA DUPLO",
    descricao:
      "Pão, 2 hambúrgueres tradicionais, queijo, alface, tomate e molho especial.",
    preco: 18,
    categoria: "tradicionais",
    imagem:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 11,
    nome: "X-FRANGO",
    descricao:
      "Pão francês, filé de frango grelhado, queijo, alface, tomate e molho especial.",
    preco: 19,
    categoria: "tradicionais",
    imagem:
      "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 12,
    nome: "X-CHURRASCO",
    descricao:
      "Pão francês, carne de churrasco, queijo, alface, tomate, cebola e molho especial.",
    preco: 20,
    categoria: "tradicionais",
    imagem:
      "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },


  // ========================================================
  // ARTESANAIS
  // ========================================================

  {
    id: 13,
    nome: "PRIME 200g",
    descricao:
      "Pão, hambúrguer artesanal 200g, muçarela, presunto, ovo, bacon, alface, tomate, cebola roxa e maionese caseira.",
    preco: 25,
    categoria: "artesanais",
    imagem:
      "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 14,
    nome: "RÚSTICO 200g",
    descricao:
      "Pão, hambúrguer artesanal 200g, queijo, cebola e maionese verde.",
    preco: 27,
    categoria: "artesanais",
    imagem:
      "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 15,
    nome: "GRILL 200g",
    descricao:
      "Pão, hambúrguer artesanal 200g, queijo, cheddar, picles, alface, tomate e maionese especial.",
    preco: 23,
    categoria: "artesanais",
    imagem:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 16,
    nome: "CHICKEN SUPREME",
    descricao:
      "Pão, filé de frango empanado 200g, queijo, alface americana, tomate e maionese especial.",
    preco: 28,
    categoria: "artesanais",
    imagem:
      "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },


  // ========================================================
  // PORÇÕES
  // ========================================================

  {
    id: 17,
    nome: "BATATA FRITA P",
    descricao:
      "Batata frita com cheddar, catupiry e bacon.",
    preco: 15,
    categoria: "porcoes",
    imagem:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 18,
    nome: "BATATA FRITA M",
    descricao:
      "Batata frita com cheddar, catupiry e bacon.",
    preco: 20,
    categoria: "porcoes",
    imagem:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 19,
    nome: "BATATA FRITA G",
    descricao:
      "Batata frita com cheddar, catupiry e bacon.",
    preco: 30,
    categoria: "porcoes",
    imagem:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 20,
    nome: "CALABRESA ACEBOLADA P",
    descricao:
      "Porção de calabresa acebolada.",
    preco: 18,
    categoria: "porcoes",
    imagem:
      "https://static.itdg.com.br/images/640-auto/6747357e8b20df03e3b1920eaf8d29e1/linguica-calabresa-acebolada.jpg",
    ativo: true
  },

  {
    id: 21,
    nome: "CALABRESA ACEBOLADA M",
    descricao:
      "Porção de calabresa acebolada.",
    preco: 27,
    categoria: "porcoes",
    imagem:
      "https://static.itdg.com.br/images/640-auto/6747357e8b20df03e3b1920eaf8d29e1/linguica-calabresa-acebolada.jpg",
    ativo: true
  },

  {
    id: 22,
    nome: "CALABRESA ACEBOLADA G",
    descricao:
      "Porção de calabresa acebolada.",
    preco: 35,
    categoria: "porcoes",
    imagem:
      "https://static.itdg.com.br/images/640-auto/6747357e8b20df03e3b1920eaf8d29e1/linguica-calabresa-acebolada.jpg",
    ativo: true
  },


  // ========================================================
  // BEBIDAS
  // ========================================================

  {
    id: 23,
    nome: "PEPSI 1,5L",
    descricao:
      "Refrigerante Pepsi 1,5L.",
    preco: 11,
    categoria: "bebidas",
    imagem:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 24,
    nome: "COCA ZERO 1L",
    descricao:
      "Refrigerante Coca-Cola Zero 1L.",
    preco: 10,
    categoria: "bebidas",
    imagem:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 25,
    nome: "COCA-COLA 1,5L",
    descricao:
      "Refrigerante Coca-Cola 1,5L.",
    preco: 12,
    categoria: "bebidas",
    imagem:
      "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 26,
    nome: "PEPSI ZERO LATA",
    descricao:
      "Pepsi Zero lata.",
    preco: 6,
    categoria: "bebidas",
    imagem:
      "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 27,
    nome: "FANTA 200ML",
    descricao:
      "Refrigerante Fanta 200ml.",
    preco: 3.5,
    categoria: "bebidas",
    imagem:
      "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=900&q=80",
    ativo: true
  },

  {
    id: 28,
    nome: "COCA-COLA 200ML",
    descricao:
      "Refrigerante Coca-Cola 200ml.",
    preco: 3.5,
    categoria: "bebidas",
    imagem:
      "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=80",
    ativo: true
  }

];


// ==========================================================
// PRODUTOS DO PAINEL ADMINISTRATIVO
// ==========================================================

let produtos =
  JSON.parse(
    localStorage.getItem("bernardesProdutos")
  ) || PRODUTOS_PADRAO;


// Se ainda não existe no navegador, salva os padrões.

if (!localStorage.getItem("bernardesProdutos")) {

  localStorage.setItem(
    "bernardesProdutos",
    JSON.stringify(PRODUTOS_PADRAO)
  );

}


// ==========================================================
// SACOLA
// ==========================================================

let sacola =
  JSON.parse(
    localStorage.getItem("bernardesBurgerSacola")
  ) || [];


// ==========================================================
// ELEMENTOS
// ==========================================================

const produtosContainer =
  document.getElementById("produtos");

const quantidadeSacola =
  document.getElementById("quantidadeSacola");

const botaoSacola =
  document.getElementById("botaoSacola");


// ==========================================================
// CATEGORIA ATUAL
// ==========================================================

let categoriaAtual =
  "tradicionais";


// ==========================================================
// FORMATAR PREÇO
// ==========================================================

function formatarPreco(valor) {

  return Number(valor).toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  );

}


// ==========================================================
// MOSTRAR PRODUTOS
// ==========================================================

function mostrarProdutos(
  categoria = categoriaAtual
) {

  categoriaAtual = categoria;


  // Sempre pega as alterações mais recentes do admin

  const produtosSalvos =
    JSON.parse(
      localStorage.getItem("bernardesProdutos")
    );


  if (produtosSalvos) {

    produtos =
      produtosSalvos;

  }


  const produtosFiltrados =
    produtos.filter(produto => {

      // Produto desativado no painel
      if (produto.ativo === false) {
        return false;
      }

      // Mostrar todos
      if (categoria === "todos") {
        return true;
      }

      return (
        produto.categoria === categoria
      );

    });


  if (produtosFiltrados.length === 0) {

    produtosContainer.innerHTML = `

      <div class="sem-produtos">

        <h3>
          Nenhum produto disponível
        </h3>

        <p>
          Não há produtos nesta categoria no momento.
        </p>

      </div>

    `;

    return;

  }


  produtosContainer.innerHTML =
    produtosFiltrados
      .map(produto => `

        <article class="produto-card">

          <img
            class="produto-imagem-real"
            src="${produto.imagem}"
            alt="${produto.nome}"
            loading="lazy"
          >


          <div class="produto-conteudo">

            <h3>
              ${produto.nome}
            </h3>


            <p>
              ${produto.descricao}
            </p>


            <div class="produto-rodape">

              <span class="preco">

                ${formatarPreco(
                  produto.preco
                )}

              </span>


              <button
                type="button"
                class="btn-adicionar"
                onclick="adicionarSacola(${produto.id})"
              >

                + Adicionar

              </button>

            </div>

          </div>

        </article>

      `)
      .join("");

}


// ==========================================================
// SALVAR SACOLA
// ==========================================================

function salvarSacola() {

  localStorage.setItem(
    "bernardesBurgerSacola",
    JSON.stringify(sacola)
  );


  atualizarQuantidade();

}


// ==========================================================
// ATUALIZAR CONTADOR
// ==========================================================

function atualizarQuantidade() {

  const quantidade =
    sacola.reduce(
      (total, item) =>
        total + item.quantidade,
      0
    );


  quantidadeSacola.textContent =
    quantidade;

}


// ==========================================================
// ADICIONAR PRODUTO NA SACOLA
// ==========================================================

function adicionarSacola(id) {

  // Atualiza produtos com as informações do admin

  produtos =
    JSON.parse(
      localStorage.getItem("bernardesProdutos")
    ) || PRODUTOS_PADRAO;


  const produto =
    produtos.find(
      produto =>
        Number(produto.id) === Number(id)
    );


  if (!produto) {

    mostrarNotificacao(
      "Produto não encontrado."
    );

    return;

  }


  const itemExistente =
    sacola.find(
      item =>
        Number(item.id) === Number(id)
    );


  if (itemExistente) {

    itemExistente.quantidade++;

  } else {

    sacola.push({

      id: produto.id,

      nome: produto.nome,

      preco: Number(produto.preco),

      imagem: produto.imagem,

      quantidade: 1

    });

  }


  salvarSacola();


  mostrarNotificacao(
    `${produto.nome} adicionado à sacola!`
  );

}


// ==========================================================
// ABRIR SACOLA
// ==========================================================

function abrirSacola() {

  const modalAnterior =
    document.querySelector(
      ".modal-sacola"
    );


  if (modalAnterior) {

    modalAnterior.remove();

  }


  const modal =
    document.createElement("div");


  modal.className =
    "modal-sacola";


  modal.innerHTML = `

    <div
      class="sacola-overlay"
      onclick="fecharSacola()"
    ></div>


    <div class="sacola-painel">


      <div class="sacola-topo">

        <div>

          <h2>
            🛒 Sua Sacola
          </h2>

          <p>
            Revise seu pedido
          </p>

        </div>


        <button
          class="fechar-sacola"
          type="button"
          onclick="fecharSacola()"
        >

          ✕

        </button>

      </div>


      <div
        class="sacola-itens"
        id="sacolaItens"
      ></div>


      <!-- =================================
           DADOS DO CLIENTE
      ================================== -->

      <div class="checkout-bloco">

        <h3>
          👤 Seus dados
        </h3>


        <input
          type="text"
          id="clienteNome"
          placeholder="Seu nome *"
        >


        <input
          type="tel"
          id="clienteTelefone"
          placeholder="Telefone / WhatsApp *"
        >

      </div>


      <!-- =================================
           ENTREGA OU RETIRADA
      ================================== -->

      <div class="checkout-bloco">

        <h3>
          🛵 Como deseja receber?
        </h3>


        <label class="opcao-checkout">

          <input
            type="radio"
            name="recebimento"
            value="entrega"
            onchange="alterarRecebimento()"
          >

          Entrega

        </label>


        <label class="opcao-checkout">

          <input
            type="radio"
            name="recebimento"
            value="retirada"
            onchange="alterarRecebimento()"
          >

          Retirada

        </label>

      </div>


      <!-- =================================
           ENDEREÇO
      ================================== -->

      <div
        class="checkout-bloco"
        id="dadosEntrega"
        style="display: none;"
      >

        <h3>
          📍 Endereço de entrega
        </h3>


        <input
          type="text"
          id="cep"
          placeholder="CEP *"
          maxlength="9"
          autocomplete="postal-code"
          oninput="mascararCEP()"
        >


        <small
          id="statusCep"
          style="
            display:block;
            margin-top:-7px;
            margin-bottom:12px;
            color:#ff9d00;
            font-size:12px;
          "
        ></small>


        <input
          type="text"
          id="rua"
          placeholder="Rua *"
          autocomplete="address-line1"
        >


        <input
          type="text"
          id="numero"
          placeholder="Número *"
        >


        <input
          type="text"
          id="complemento"
          placeholder="Complemento"
          autocomplete="address-line2"
        >


        <input
          type="text"
          id="bairro"
          placeholder="Bairro *"
        >


        <input
          type="text"
          id="cidade"
          placeholder="Cidade *"
        >


        <input
          type="text"
          id="estado"
          placeholder="Estado *"
        >


        <input
          type="text"
          id="referencia"
          placeholder="Ponto de referência"
        >

      </div>


      <!-- =================================
           PAGAMENTO
      ================================== -->

      <div class="checkout-bloco">

        <h3>
          💳 Forma de pagamento
        </h3>


        <label class="opcao-checkout">

          <input
            type="radio"
            name="pagamento"
            value="PIX"
            onchange="alterarPagamento()"
          >

          PIX

        </label>


        <label class="opcao-checkout">

          <input
            type="radio"
            name="pagamento"
            value="Dinheiro"
            onchange="alterarPagamento()"
          >

          Dinheiro

        </label>


        <label class="opcao-checkout">

          <input
            type="radio"
            name="pagamento"
            value="Cartão de crédito"
            onchange="alterarPagamento()"
          >

          Cartão de crédito

        </label>


        <label class="opcao-checkout">

          <input
            type="radio"
            name="pagamento"
            value="Cartão de débito"
            onchange="alterarPagamento()"
          >

          Cartão de débito

        </label>

      </div>


      <!-- =================================
           TROCO
      ================================== -->

      <div
        class="checkout-bloco"
        id="blocoTroco"
        style="display:none;"
      >

        <h3>
          💵 Precisa de troco?
        </h3>


        <label class="opcao-checkout">

          <input
            type="radio"
            name="precisaTroco"
            value="nao"
            onchange="alterarTroco()"
          >

          Não

        </label>


        <label class="opcao-checkout">

          <input
            type="radio"
            name="precisaTroco"
            value="sim"
            onchange="alterarTroco()"
          >

          Sim

        </label>


        <div
          id="campoTroco"
          style="display:none;"
        >

          <input
            type="number"
            id="trocoPara"
            min="0"
            step="0.01"
            placeholder="Troco para quanto?"
          >

        </div>

      </div>


      <!-- =================================
           TOTAL
      ================================== -->

      <div class="sacola-resumo">

        <span>
          Total
        </span>

        <strong
          id="totalSacola"
          class="total-sacola"
        >

          R$ 0,00

        </strong>

      </div>


      <button
        type="button"
        class="btn-finalizar"
        onclick="finalizarPedido()"
      >

        📱 Finalizar pedido pelo WhatsApp

      </button>


      <button
        type="button"
        class="btn-limpar"
        onclick="limparSacola()"
      >

        Limpar sacola

      </button>


    </div>

  `;


  document.body.appendChild(
    modal
  );


  atualizarModalSacola();

}


// ==========================================================
// ATUALIZAR SACOLA
// ==========================================================

function atualizarModalSacola() {

  const container =
    document.getElementById(
      "sacolaItens"
    );


  const totalElement =
    document.getElementById(
      "totalSacola"
    );


  if (!container) {
    return;
  }


  if (sacola.length === 0) {

    container.innerHTML = `

      <div class="sacola-vazia">

        <span>
          🛒
        </span>

        <h3>
          Sua sacola está vazia
        </h3>

        <p>
          Adicione produtos do nosso cardápio.
        </p>

      </div>

    `;

  } else {

    container.innerHTML =
      sacola
        .map(item => `

          <div class="item-sacola">

            <img
              src="${item.imagem}"
              alt="${item.nome}"
              style="
                width:65px;
                height:65px;
                object-fit:cover;
                border-radius:10px;
              "
            >


            <div class="item-sacola-info">

              <strong>
                ${item.nome}
              </strong>


              <span>
                ${formatarPreco(
                  item.preco
                )}
              </span>


              <div class="quantidade-controle">

                <button
                  type="button"
                  onclick="diminuirQuantidade(${item.id})"
                >
                  −
                </button>


                <span>
                  ${item.quantidade}
                </span>


                <button
                  type="button"
                  onclick="aumentarQuantidade(${item.id})"
                >
                  +
                </button>

              </div>

            </div>


            <button
              type="button"
              class="remover-item"
              onclick="removerItem(${item.id})"
              title="Remover produto"
            >

              ✕

            </button>

          </div>

        `)
        .join("");

  }


  const total =
    calcularTotal();


  if (totalElement) {

    totalElement.textContent =
      formatarPreco(total);

  }

}


// ==========================================================
// AUMENTAR QUANTIDADE
// ==========================================================

function aumentarQuantidade(id) {

  const item =
    sacola.find(
      item =>
        Number(item.id) === Number(id)
    );


  if (!item) {
    return;
  }


  item.quantidade++;


  salvarSacola();

  atualizarModalSacola();

}


// ==========================================================
// DIMINUIR QUANTIDADE
// ==========================================================

function diminuirQuantidade(id) {

  const item =
    sacola.find(
      item =>
        Number(item.id) === Number(id)
    );


  if (!item) {
    return;
  }


  item.quantidade--;


  if (item.quantidade <= 0) {

    removerItem(id);

    return;

  }


  salvarSacola();

  atualizarModalSacola();

}


// ==========================================================
// REMOVER ITEM
// ==========================================================

function removerItem(id) {

  sacola =
    sacola.filter(
      item =>
        Number(item.id) !== Number(id)
    );


  salvarSacola();

  atualizarModalSacola();

}


// ==========================================================
// LIMPAR SACOLA
// ==========================================================

function limparSacola() {

  if (sacola.length === 0) {
    return;
  }


  const confirmar =
    confirm(
      "Deseja limpar toda a sacola?"
    );


  if (!confirmar) {
    return;
  }


  sacola = [];


  salvarSacola();

  atualizarModalSacola();

}


// ==========================================================
// FECHAR SACOLA
// ==========================================================

function fecharSacola() {

  const modal =
    document.querySelector(
      ".modal-sacola"
    );


  if (modal) {

    modal.remove();

  }

}


// ==========================================================
// TOTAL
// ==========================================================

function calcularTotal() {

  return sacola.reduce(
    (total, item) => {

      return (
        total +
        Number(item.preco) *
        Number(item.quantidade)
      );

    },
    0
  );

}


// ==========================================================
// ALTERAR ENTREGA / RETIRADA
// ==========================================================

function alterarRecebimento() {

  const selecionado =
    document.querySelector(
      'input[name="recebimento"]:checked'
    );


  const dadosEntrega =
    document.getElementById(
      "dadosEntrega"
    );


  if (!selecionado) {
    return;
  }


  if (
    selecionado.value ===
    "entrega"
  ) {

    dadosEntrega.style.display =
      "block";

  } else {

    dadosEntrega.style.display =
      "none";

  }

}


// ==========================================================
// MÁSCARA CEP + BUSCA AUTOMÁTICA
// ==========================================================

function mascararCEP() {

  const campoCep =
    document.getElementById("cep");


  if (!campoCep) {
    return;
  }


  let valor =
    campoCep.value
      .replace(/\D/g, "")
      .slice(0, 8);


  if (valor.length > 5) {

    valor =
      valor.slice(0, 5) +
      "-" +
      valor.slice(5);

  }


  campoCep.value =
    valor;


  // Assim que tiver 8 números,
  // pesquisa automaticamente.

  const cepNumeros =
    valor.replace(/\D/g, "");


  if (cepNumeros.length === 8) {

    buscarCEP();

  }

}


// ==========================================================
// BUSCAR CEP VIA VIACEP
// ==========================================================

async function buscarCEP() {

  const campoCep =
    document.getElementById("cep");


  const statusCep =
    document.getElementById(
      "statusCep"
    );


  if (!campoCep) {
    return;
  }


  const cep =
    campoCep.value.replace(
      /\D/g,
      ""
    );


  if (cep.length === 0) {

    if (statusCep) {

      statusCep.textContent = "";

    }

    return;

  }


  if (cep.length !== 8) {

    if (statusCep) {

      statusCep.textContent =
        "Digite um CEP com 8 números.";

    }

    return;

  }


  try {

    if (statusCep) {

      statusCep.textContent =
        "Buscando endereço...";

    }


    const resposta =
      await fetch(
        `https://viacep.com.br/ws/${cep}/json/`
      );


    if (!resposta.ok) {

      throw new Error(
        "Erro na consulta do CEP."
      );

    }


    const dados =
      await resposta.json();


    if (dados.erro) {

      if (statusCep) {

        statusCep.textContent =
          "CEP não encontrado.";

      }


      limparEndereco();


      return;

    }


    document.getElementById(
      "rua"
    ).value =
      dados.logradouro || "";


    document.getElementById(
      "bairro"
    ).value =
      dados.bairro || "";


    document.getElementById(
      "cidade"
    ).value =
      dados.localidade || "";


    document.getElementById(
      "estado"
    ).value =
      dados.uf || "";


    if (statusCep) {

      statusCep.textContent =
        "Endereço encontrado ✓";

    }


    const numero =
      document.getElementById(
        "numero"
      );


    if (numero) {

      numero.focus();

    }

  } catch (erro) {

    console.error(
      "Erro ao buscar CEP:",
      erro
    );


    if (statusCep) {

      statusCep.textContent =
        "Não foi possível consultar o CEP.";

    }

  }

}


// ==========================================================
// LIMPAR ENDEREÇO
// ==========================================================

function limparEndereco() {

  const campos = [
    "rua",
    "bairro",
    "cidade",
    "estado"
  ];


  campos.forEach(id => {

    const campo =
      document.getElementById(id);


    if (campo) {

      campo.value = "";

    }

  });

}


// ==========================================================
// PAGAMENTO
// ==========================================================

function alterarPagamento() {

  const pagamento =
    document.querySelector(
      'input[name="pagamento"]:checked'
    );


  const blocoTroco =
    document.getElementById(
      "blocoTroco"
    );


  if (!pagamento) {
    return;
  }


  if (
    pagamento.value ===
    "Dinheiro"
  ) {

    blocoTroco.style.display =
      "block";

  } else {

    blocoTroco.style.display =
      "none";

  }

}


// ==========================================================
// TROCO
// ==========================================================

function alterarTroco() {

  const escolha =
    document.querySelector(
      'input[name="precisaTroco"]:checked'
    );


  const campoTroco =
    document.getElementById(
      "campoTroco"
    );


  if (!escolha) {
    return;
  }


  if (
    escolha.value === "sim"
  ) {

    campoTroco.style.display =
      "block";

  } else {

    campoTroco.style.display =
      "none";

  }

}


// ==========================================================
// FINALIZAR PEDIDO
// ==========================================================

function finalizarPedido() {

  if (sacola.length === 0) {

    alert(
      "Sua sacola está vazia."
    );

    return;

  }


  const nome =
    document
      .getElementById("clienteNome")
      .value
      .trim();


  const telefone =
    document
      .getElementById("clienteTelefone")
      .value
      .trim();


  if (!nome) {

    alert(
      "Digite seu nome."
    );

    return;

  }


  if (!telefone) {

    alert(
      "Digite seu telefone."
    );

    return;

  }


  const recebimento =
    document.querySelector(
      'input[name="recebimento"]:checked'
    );


  if (!recebimento) {

    alert(
      "Escolha Entrega ou Retirada."
    );

    return;

  }


  const pagamento =
    document.querySelector(
      'input[name="pagamento"]:checked'
    );


  if (!pagamento) {

    alert(
      "Escolha uma forma de pagamento."
    );

    return;

  }


  // ========================================================
  // MENSAGEM
  // ========================================================

  let mensagem =

`🍔 *NOVO PEDIDO - BERNARDES BURGER*

👤 *Cliente:* ${nome}
📱 *Telefone:* ${telefone}

🛒 *PEDIDO:*`;



  sacola.forEach(item => {

    const subtotal =
      Number(item.preco) *
      Number(item.quantidade);


    mensagem +=

`

• ${item.quantidade}x ${item.nome}
  ${formatarPreco(subtotal)}`;

  });



  mensagem +=

`

💰 *TOTAL: ${formatarPreco(calcularTotal())}*`;



  // ========================================================
  // ENTREGA
  // ========================================================

  if (
    recebimento.value ===
    "entrega"
  ) {

    const cep =
      document
        .getElementById("cep")
        .value
        .trim();


    const rua =
      document
        .getElementById("rua")
        .value
        .trim();


    const numero =
      document
        .getElementById("numero")
        .value
        .trim();


    const complemento =
      document
        .getElementById("complemento")
        .value
        .trim();


    const bairro =
      document
        .getElementById("bairro")
        .value
        .trim();


    const cidade =
      document
        .getElementById("cidade")
        .value
        .trim();


    const estado =
      document
        .getElementById("estado")
        .value
        .trim();


    const referencia =
      document
        .getElementById("referencia")
        .value
        .trim();


    if (
      !cep ||
      !rua ||
      !numero ||
      !bairro ||
      !cidade ||
      !estado
    ) {

      alert(
        "Preencha o endereço completo para entrega."
      );

      return;

    }


    mensagem +=

`

🛵 *Recebimento:* ENTREGA

📍 *ENDEREÇO*
CEP: ${cep}
Rua: ${rua}
Número: ${numero}
Bairro: ${bairro}
Cidade: ${cidade} - ${estado}`;



    if (complemento) {

      mensagem +=
        `\nComplemento: ${complemento}`;

    }


    if (referencia) {

      mensagem +=
        `\nReferência: ${referencia}`;

    }

  }


  // ========================================================
  // RETIRADA
  // ========================================================

  else {

    mensagem +=

`

🏪 *Recebimento:* RETIRADA
O cliente irá retirar o pedido no local.`;

  }


  // ========================================================
  // FORMA DE PAGAMENTO
  // ========================================================

  mensagem +=

`

💳 *Pagamento:* ${pagamento.value}`;



  // ========================================================
  // TROCO
  // ========================================================

  if (
    pagamento.value ===
    "Dinheiro"
  ) {

    const precisaTroco =
      document.querySelector(
        'input[name="precisaTroco"]:checked'
      );


    if (!precisaTroco) {

      alert(
        "Informe se precisa de troco."
      );

      return;

    }


    if (
      precisaTroco.value ===
      "sim"
    ) {

      const trocoPara =
        Number(
          document
            .getElementById("trocoPara")
            .value
        );


      if (
        !trocoPara ||
        trocoPara <= calcularTotal()
      ) {

        alert(
          "Informe corretamente o valor para o troco."
        );

        return;

      }


      mensagem +=

`

💵 *Troco para:* ${formatarPreco(trocoPara)}
💰 *Troco aproximado:* ${formatarPreco(
        trocoPara -
        calcularTotal()
      )}`;

    } else {

      mensagem +=
        "\n💵 *Troco:* Não precisa";

    }

  }


  mensagem +=

`

━━━━━━━━━━━━━━
Pedido realizado pelo site
*Bernardes Burger*
Sabor que representa! 🍔🔥`;



  // ========================================================
  // WHATSAPP
  // ========================================================

  const numeroWhatsApp =
    "5511918526711";


  const url =
    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensagem
    )}`;


  window.open(
    url,
    "_blank"
  );

}


// ==========================================================
// NOTIFICAÇÃO
// ==========================================================

function mostrarNotificacao(
  mensagem
) {

  let notificacao =
    document.querySelector(
      ".notificacao"
    );


  if (!notificacao) {

    notificacao =
      document.createElement(
        "div"
      );


    notificacao.className =
      "notificacao";


    document.body.appendChild(
      notificacao
    );

  }


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


// ==========================================================
// BOTÕES DAS CATEGORIAS
// ==========================================================

document
  .querySelectorAll(
    ".categoria"
  )
  .forEach(botao => {

    botao.addEventListener(
      "click",
      function () {

        document
          .querySelectorAll(
            ".categoria"
          )
          .forEach(item => {

            item.classList.remove(
              "ativa"
            );

          });


        this.classList.add(
          "ativa"
        );


        mostrarProdutos(
          this.dataset.categoria
        );

      }
    );

  });


// ==========================================================
// BOTÃO SACOLA
// ==========================================================

if (botaoSacola) {

  botaoSacola.addEventListener(
    "click",
    abrirSacola
  );

}


// ==========================================================
// ATUALIZAR PRODUTOS SE O ADMIN FOR ALTERADO
// EM OUTRA ABA
// ==========================================================

window.addEventListener(
  "storage",
  function (event) {

    if (
      event.key ===
      "bernardesProdutos"
    ) {

      produtos =
        JSON.parse(
          localStorage.getItem(
            "bernardesProdutos"
          )
        ) || PRODUTOS_PADRAO;


      mostrarProdutos(
        categoriaAtual
      );

    }


    if (
      event.key ===
      "bernardesBurgerSacola"
    ) {

      sacola =
        JSON.parse(
          localStorage.getItem(
            "bernardesBurgerSacola"
          )
        ) || [];


      atualizarQuantidade();

    }

  }
);


// ==========================================================
// INICIAR SITE
// ==========================================================

mostrarProdutos(
  "tradicionais"
);

atualizarQuantidade();