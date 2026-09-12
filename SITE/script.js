// ==========================================================
// BERNARDES BURGER
// SCRIPT PRINCIPAL DO SITE - ATUALIZADO
// ==========================================================


// ==========================================================
// SUPABASE
// ==========================================================

const SUPABASE_URL =
  "https://ygxzupvimjwvokkowdap.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_TFCzWXFRyGhiQ8feUZnErw_Ln0ec8DQ";

const TABELA_PRODUTOS =
  "produtos";


// ==========================================================
// PRODUTOS PADRÃO
// ==========================================================

const PRODUTOS_PADRAO = [

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
// PRODUTOS
// ==========================================================

let produtos =
  [...PRODUTOS_PADRAO];

let categoriaAtual =
  "tradicionais";


// ==========================================================
// SACOLA
// ==========================================================

let sacola =
  JSON.parse(
    localStorage.getItem(
      "bernardesBurgerSacola"
    )
  ) || [];


// ==========================================================
// ELEMENTOS
// ==========================================================

const produtosContainer =
  document.getElementById(
    "produtos"
  );

const quantidadeSacola =
  document.getElementById(
    "quantidadeSacola"
  );

const botaoSacola =
  document.getElementById(
    "botaoSacola"
  );


// ==========================================================
// PREÇO
// ==========================================================

function formatarPreco(valor) {

  return Number(valor)
    .toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL"
      }
    );
}


// ==========================================================
// SUPABASE
// ==========================================================

async function carregarProdutosSupabase() {

  try {

    const resposta =
      await fetch(
        `${SUPABASE_URL}/rest/v1/${TABELA_PRODUTOS}?select=*&ativo=eq.true&order=id.asc`,
        {
          headers: {
            apikey:
              SUPABASE_KEY,

            Authorization:
              `Bearer ${SUPABASE_KEY}`
          }
        }
      );


    if (!resposta.ok) {

      throw new Error(
        await resposta.text()
      );
    }


    const dados =
      await resposta.json();


    if (
      Array.isArray(dados) &&
      dados.length > 0
    ) {

      produtos = dados;

    } else {

      produtos =
        [...PRODUTOS_PADRAO];
    }


    mostrarProdutos(
      categoriaAtual
    );

  } catch (erro) {

    console.error(
      "Erro ao carregar produtos:",
      erro
    );


    produtos =
      [...PRODUTOS_PADRAO];


    mostrarProdutos(
      categoriaAtual
    );
  }
}


// ==========================================================
// ADICIONAIS
// ==========================================================

const ADICIONAIS = [

  {
    id: "hamb-trad",
    nome:
      "Hambúrguer Tradicional",
    preco: 4.50
  },

  {
    id: "hamb-art",
    nome:
      "Hambúrguer Artesanal (200g)",
    preco: 17
  },

  {
    id: "frango",
    nome:
      "Frango Empanado (unid./tiras)",
    preco: 5.50
  },

  {
    id: "cheddar-fat",
    nome:
      "Cheddar Fatiado em Dobro",
    preco: 3.50
  },

  {
    id: "cheddar-cremoso",
    nome:
      "Cheddar Cremoso da Casa",
    preco: 6
  },

  {
    id: "queijo",
    nome:
      "Queijo Prato",
    preco: 3
  },

  {
    id: "catupiry",
    nome:
      "Catupiry Original",
    preco: 5
  },

  {
    id: "bacon-fatias",
    nome:
      "Bacon Crocante em Fatias",
    preco: 3.50
  },

  {
    id: "bacon-cubos",
    nome:
      "Bacon em Cubos Crocantes",
    preco: 3
  },

  {
    id: "ovo",
    nome:
      "Ovo",
    preco: 1.50
  },

  {
    id: "cebola",
    nome:
      "Cebola Caramelizada",
    preco: 3.50
  },

  {
    id: "picles",
    nome:
      "Picles",
    preco: 3.50
  },

  {
    id: "maionese",
    nome:
      "Maionese Verde Especial da Casa",
    preco: 4
  }

];


// ==========================================================
// VERIFICAR SE ACEITA ADICIONAL
// ==========================================================

function produtoAceitaAdicionais(
  produto
) {

  return (
    produto &&
    (
      produto.categoria ===
        "tradicionais" ||

      produto.categoria ===
        "artesanais"
    )
  );
}


// ==========================================================
// CSS DO MODAL DE ADICIONAIS
// ==========================================================

function garantirEstiloAdicionais() {

  if (
    document.getElementById(
      "estiloAdicionaisBernardes"
    )
  ) {

    return;
  }


  const estilo =
    document.createElement(
      "style"
    );


  estilo.id =
    "estiloAdicionaisBernardes";


  estilo.textContent = `

.modal-adicionais{
position:fixed;
inset:0;
z-index:10000;
display:flex;
align-items:center;
justify-content:center;
padding:18px;
}

.modal-adicionais-overlay{
position:absolute;
inset:0;
background:rgba(0,0,0,.82);
backdrop-filter:blur(4px);
}

.modal-adicionais-card{
position:relative;
width:min(570px,100%);
max-height:90vh;
overflow-y:auto;
background:#151515;
color:#fff;
border:1px solid rgba(255,157,0,.45);
border-radius:20px;
padding:20px;
box-shadow:0 24px 70px rgba(0,0,0,.6);
}

.modal-adicionais-topo{
display:flex;
gap:14px;
align-items:flex-start;
margin-bottom:14px;
}

.modal-adicionais-topo img{
width:84px;
height:84px;
object-fit:cover;
border-radius:14px;
background:#222;
}

.modal-adicionais-topo h2{
margin:0 0 5px;
font-size:1.2rem;
}

.modal-adicionais-topo p{
margin:0;
color:#bbb;
font-size:.9rem;
}

.fechar-adicionais{
margin-left:auto;
border:0;
background:#2b2b2b;
color:#fff;
width:36px;
height:36px;
border-radius:50%;
font-size:20px;
cursor:pointer;
}

.lista-adicionais{
display:grid;
gap:9px;
margin:14px 0;
}

.adicional-opcao{
display:flex;
align-items:center;
gap:10px;
padding:11px 12px;
background:#1f1f1f;
border:1px solid #333;
border-radius:12px;
cursor:pointer;
}

.adicional-opcao input{
width:18px;
height:18px;
accent-color:#ff9d00;
}

.adicional-opcao span{
flex:1;
}

.adicional-opcao strong{
color:#ffb238;
white-space:nowrap;
}

.resumo-adicionais{
display:flex;
justify-content:space-between;
align-items:center;
margin-top:14px;
padding-top:14px;
border-top:1px solid #333;
font-weight:800;
}

.resumo-adicionais strong{
color:#ff9d00;
font-size:1.25rem;
}

.btn-confirmar-adicionais{
width:100%;
margin-top:14px;
border:0;
border-radius:12px;
padding:14px;
background:#ff9d00;
color:#111;
font-weight:900;
cursor:pointer;
font-size:1rem;
}

.adicionais-sacola{
display:block;
margin-top:6px;
color:#c9c9c9;
font-size:.78rem;
line-height:1.4;
}

.adicionais-sacola b{
color:#ffb238;
}

@media(max-width:520px){

.modal-adicionais{
padding:0;
align-items:flex-end;
}

.modal-adicionais-card{
width:100%;
max-height:92vh;
border-radius:22px 22px 0 0;
padding:16px;
}

}

  `;


  document.head.appendChild(
    estilo
  );
}


// ==========================================================
// ABRIR ADICIONAIS
// ==========================================================

function abrirAdicionais(
  produto
) {

  garantirEstiloAdicionais();

  fecharAdicionais();


  const modal =
    document.createElement(
      "div"
    );


  modal.className =
    "modal-adicionais";


  modal.innerHTML = `

<div
class="modal-adicionais-overlay"
onclick="fecharAdicionais()">
</div>

<div class="modal-adicionais-card">

<div class="modal-adicionais-topo">

<img
src="${produto.imagem}"
alt="${produto.nome}"
>

<div>

<h2>
${produto.nome}
</h2>

<p>
Escolha os adicionais que quiser.
</p>

</div>

<button
type="button"
class="fechar-adicionais"
onclick="fecharAdicionais()">
×
</button>

</div>


<div class="lista-adicionais">

${ADICIONAIS.map(
  adicional => `

<label class="adicional-opcao">

<input
type="checkbox"
class="check-adicional"
value="${adicional.id}"
data-preco="${adicional.preco}"
onchange="atualizarTotalAdicionais(${Number(
  produto.preco
)})"
>

<span>
${adicional.nome}
</span>

<strong>
+ ${formatarPreco(
  adicional.preco
)}
</strong>

</label>

`
).join("")}

</div>


<div class="resumo-adicionais">

<span>
Total do lanche
</span>

<strong id="totalComAdicionais">
${formatarPreco(
  produto.preco
)}
</strong>

</div>


<button
type="button"
class="btn-confirmar-adicionais"
onclick="confirmarAdicionais(${produto.id})"
>
Adicionar à sacola
</button>

</div>

  `;


  document.body.appendChild(
    modal
  );
}


// ==========================================================
// FECHAR ADICIONAIS
// ==========================================================

function fecharAdicionais() {

  const modal =
    document.querySelector(
      ".modal-adicionais"
    );


  if (modal) {

    modal.remove();
  }
}


// ==========================================================
// TOTAL DOS ADICIONAIS
// ==========================================================

function atualizarTotalAdicionais(
  precoBase
) {

  const selecionados =
    document.querySelectorAll(
      ".check-adicional:checked"
    );


  let extra = 0;


  selecionados.forEach(
    item => {

      extra +=
        Number(
          item.dataset.preco
        );
    }
  );


  const total =
    document.getElementById(
      "totalComAdicionais"
    );


  if (total) {

    total.textContent =
      formatarPreco(
        Number(precoBase) +
        extra
      );
  }
}


// ==========================================================
// CONFIRMAR ADICIONAIS
// ==========================================================

function confirmarAdicionais(
  id
) {

  const produto =
    produtos.find(
      p =>
        Number(p.id) ===
        Number(id)
    );


  if (!produto) {

    return;
  }


  const selecionados =
    [
      ...document.querySelectorAll(
        ".check-adicional:checked"
      )
    ]
      .map(
        input =>
          ADICIONAIS.find(
            adicional =>
              adicional.id ===
              input.value
          )
      )
      .filter(Boolean);


  adicionarSacolaDireto(
    produto,
    selecionados
  );


  fecharAdicionais();
}


// ==========================================================
// ADICIONAR DIRETO NA SACOLA
// ==========================================================

function adicionarSacolaDireto(
  produto,
  adicionais = []
) {

  const valorExtras =
    adicionais.reduce(
      (
        total,
        adicional
      ) =>
        total +
        Number(
          adicional.preco
        ),
      0
    );


  const assinatura =
    adicionais
      .map(
        adicional =>
          adicional.id
      )
      .sort()
      .join("+");


  const chave =
    `${produto.id}|${assinatura}`;


  const itemExistente =
    sacola.find(
      item =>
        String(
          item.chave ||
          `${item.id}|`
        ) === chave
    );


  if (itemExistente) {

    itemExistente.quantidade++;

  } else {

    sacola.push({

      id:
        produto.id,

      chave,

      nome:
        produto.nome,

      precoBase:
        Number(
          produto.preco
        ),

      preco:
        Number(
          produto.preco
        ) +
        valorExtras,

      imagem:
        produto.imagem,

      quantidade:
        1,

      adicionais:
        adicionais.map(
          adicional => ({
            id:
              adicional.id,

            nome:
              adicional.nome,

            preco:
              Number(
                adicional.preco
              )
          })
        )
    });
  }


  salvarSacola();


  mostrarNotificacao(
    `${produto.nome} adicionado à sacola!`
  );
}


// ==========================================================
// MOSTRAR PRODUTOS
// ==========================================================

function mostrarProdutos(
  categoria =
    categoriaAtual
) {

  categoriaAtual =
    categoria;


  if (!produtosContainer) {

    return;
  }


  const filtrados =
    produtos.filter(
      produto => {

        if (
          produto.ativo === false
        ) {

          return false;
        }


        if (
          categoria ===
          "todos"
        ) {

          return true;
        }


        return (
          produto.categoria ===
          categoria
        );
      }
    );


  if (
    filtrados.length === 0
  ) {

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
    filtrados
      .map(
        produto => `

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
${produto.descricao || ""}
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

        `
      )
      .join("");
}


// ==========================================================
// ADICIONAR SACOLA
// ==========================================================

function adicionarSacola(
  id
) {

  const produto =
    produtos.find(
      p =>
        Number(p.id) ===
        Number(id)
    );


  if (!produto) {

    mostrarNotificacao(
      "Produto não encontrado."
    );

    return;
  }


  if (
    produtoAceitaAdicionais(
      produto
    )
  ) {

    abrirAdicionais(
      produto
    );

    return;
  }


  adicionarSacolaDireto(
    produto
  );
}


// ==========================================================
// SALVAR SACOLA
// ==========================================================

function salvarSacola() {

  localStorage.setItem(
    "bernardesBurgerSacola",
    JSON.stringify(
      sacola
    )
  );


  atualizarQuantidade();
}


// ==========================================================
// CONTADOR SACOLA
// ==========================================================

function atualizarQuantidade() {

  const quantidade =
    sacola.reduce(
      (
        total,
        item
      ) =>
        total +
        Number(
          item.quantidade
        ),
      0
    );


  if (
    quantidadeSacola
  ) {

    quantidadeSacola.textContent =
      quantidade;
  }
}


// ==========================================================
// ABRIR SACOLA
// ==========================================================

function abrirSacola() {

  const anterior =
    document.querySelector(
      ".modal-sacola"
    );


  if (anterior) {

    anterior.remove();
  }


  const modal =
    document.createElement(
      "div"
    );


  modal.className =
    "modal-sacola";


  modal.innerHTML = `

<div
class="sacola-overlay"
onclick="fecharSacola()">
</div>

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
type="button"
class="fechar-sacola"
onclick="fecharSacola()"
>
✕
</button>

</div>


<div
class="sacola-itens"
id="sacolaItens">
</div>


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


<div
class="checkout-bloco"
id="dadosEntrega"
style="display:none;"
>

<h3>
📍 Endereço de entrega
</h3>

<input
type="text"
id="cep"
placeholder="CEP *"
maxlength="9"
oninput="mascararCEP()"
>

<small
id="statusCep"
style="
display:block;
margin-bottom:12px;
color:#ff9d00;
">
</small>

<input
type="text"
id="rua"
placeholder="Rua *"
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


  if (
    sacola.length === 0
  ) {

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
        .map(
          (
            item,
            index
          ) => `

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

${
  Array.isArray(
    item.adicionais
  ) &&
  item.adicionais.length > 0

    ? `

<small class="adicionais-sacola">

<b>
Adicionais:
</b>

<br>

${item.adicionais
  .map(
    adicional =>
      `+ ${adicional.nome} (${formatarPreco(
        adicional.preco
      )})`
  )
  .join("<br>")}

</small>

`
    : ""
}


<div class="quantidade-controle">

<button
type="button"
onclick="diminuirQuantidade(${index})"
>
−
</button>

<span>
${item.quantidade}
</span>

<button
type="button"
onclick="aumentarQuantidade(${index})"
>
+
</button>

</div>

</div>


<button
type="button"
class="remover-item"
onclick="removerItem(${index})"
>
✕
</button>

</div>

          `
        )
        .join("");
  }


  if (totalElement) {

    totalElement.textContent =
      formatarPreco(
        calcularTotal()
      );
  }
}


// ==========================================================
// QUANTIDADE
// ==========================================================

function aumentarQuantidade(
  index
) {

  if (!sacola[index]) {

    return;
  }


  sacola[index]
    .quantidade++;


  salvarSacola();

  atualizarModalSacola();
}


function diminuirQuantidade(
  index
) {

  if (!sacola[index]) {

    return;
  }


  sacola[index]
    .quantidade--;


  if (
    sacola[index]
      .quantidade <= 0
  ) {

    removerItem(
      index
    );

    return;
  }


  salvarSacola();

  atualizarModalSacola();
}


// ==========================================================
// REMOVER
// ==========================================================

function removerItem(
  index
) {

  if (!sacola[index]) {

    return;
  }


  sacola.splice(
    index,
    1
  );


  salvarSacola();

  atualizarModalSacola();
}


// ==========================================================
// LIMPAR
// ==========================================================

function limparSacola() {

  if (
    sacola.length === 0
  ) {

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
    (
      total,
      item
    ) =>

      total +

      Number(
        item.preco
      ) *

      Number(
        item.quantidade
      ),

    0
  );
}


// ==========================================================
// RECEBIMENTO
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


  if (
    !selecionado ||
    !dadosEntrega
  ) {

    return;
  }


  dadosEntrega.style.display =
    selecionado.value ===
    "entrega"

      ? "block"

      : "none";
}


// ==========================================================
// CEP
// ==========================================================

function mascararCEP() {

  const campo =
    document.getElementById(
      "cep"
    );


  if (!campo) {

    return;
  }


  let valor =
    campo.value
      .replace(
        /\D/g,
        ""
      )
      .slice(
        0,
        8
      );


  if (
    valor.length > 5
  ) {

    valor =
      valor.slice(
        0,
        5
      ) +
      "-" +
      valor.slice(
        5
      );
  }


  campo.value =
    valor;


  if (
    valor
      .replace(
        /\D/g,
        ""
      )
      .length === 8
  ) {

    buscarCEP();
  }
}


// ==========================================================
// BUSCAR CEP
// ==========================================================

async function buscarCEP() {

  const campo =
    document.getElementById(
      "cep"
    );


  const status =
    document.getElementById(
      "statusCep"
    );


  if (!campo) {

    return;
  }


  const cep =
    campo.value
      .replace(
        /\D/g,
        ""
      );


  if (
    cep.length !== 8
  ) {

    return;
  }


  try {

    if (status) {

      status.textContent =
        "Buscando endereço...";
    }


    const resposta =
      await fetch(
        `https://viacep.com.br/ws/${cep}/json/`
      );


    const dados =
      await resposta.json();


    if (dados.erro) {

      if (status) {

        status.textContent =
          "CEP não encontrado.";
      }

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


    if (status) {

      status.textContent =
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
      erro
    );


    if (status) {

      status.textContent =
        "Erro ao buscar CEP.";
    }
  }
}


// ==========================================================
// PAGAMENTO
// ==========================================================

function alterarPagamento() {

  const pagamento =
    document.querySelector(
      'input[name="pagamento"]:checked'
    );


  const bloco =
    document.getElementById(
      "blocoTroco"
    );


  if (
    !pagamento ||
    !bloco
  ) {

    return;
  }


  bloco.style.display =
    pagamento.value ===
    "Dinheiro"

      ? "block"

      : "none";
}


// ==========================================================
// TROCO
// ==========================================================

function alterarTroco() {

  const escolha =
    document.querySelector(
      'input[name="precisaTroco"]:checked'
    );


  const campo =
    document.getElementById(
      "campoTroco"
    );


  if (
    !escolha ||
    !campo
  ) {

    return;
  }


  campo.style.display =
    escolha.value ===
    "sim"

      ? "block"

      : "none";
}


// ==========================================================
// FINALIZAR PEDIDO
// ==========================================================

function finalizarPedido() {

  if (
    sacola.length === 0
  ) {

    alert(
      "Sua sacola está vazia."
    );

    return;
  }


  const nome =
    document
      .getElementById(
        "clienteNome"
      )
      .value
      .trim();


  const telefone =
    document
      .getElementById(
        "clienteTelefone"
      )
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


  let mensagem =

`🍔 *NOVO PEDIDO - BERNARDES BURGER*

👤 *Cliente:* ${nome}
📱 *Telefone:* ${telefone}

🛒 *PEDIDO:*`;


  sacola.forEach(
    item => {

      const subtotal =
        Number(
          item.preco
        ) *
        Number(
          item.quantidade
        );


      mensagem +=

`

• ${item.quantidade}x ${item.nome}`;


      if (
        Array.isArray(
          item.adicionais
        ) &&
        item.adicionais.length > 0
      ) {

        mensagem +=
          "\n  *Adicionais:*";


        item.adicionais
          .forEach(
            adicional => {

              mensagem +=
`

  + ${adicional.nome} (+${formatarPreco(
                adicional.preco
              )})`;

            }
          );
      }


      mensagem +=

`
  ${formatarPreco(
    subtotal
  )}`;
    }
  );


  mensagem +=

`

💰 *TOTAL: ${formatarPreco(
    calcularTotal()
  )}*`;


// ==========================================================
// ENTREGA
// ==========================================================

  if (
    recebimento.value ===
    "entrega"
  ) {

    const cep =
      document
        .getElementById(
          "cep"
        )
        .value
        .trim();


    const rua =
      document
        .getElementById(
          "rua"
        )
        .value
        .trim();


    const numero =
      document
        .getElementById(
          "numero"
        )
        .value
        .trim();


    const complemento =
      document
        .getElementById(
          "complemento"
        )
        .value
        .trim();


    const bairro =
      document
        .getElementById(
          "bairro"
        )
        .value
        .trim();


    const cidade =
      document
        .getElementById(
          "cidade"
        )
        .value
        .trim();


    const estado =
      document
        .getElementById(
          "estado"
        )
        .value
        .trim();


    const referencia =
      document
        .getElementById(
          "referencia"
        )
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
        "Preencha o endereço completo."
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

  } else {

    mensagem +=

`

🏪 *Recebimento:* RETIRADA
O cliente irá retirar o pedido no local.`;

  }


// ==========================================================
// PAGAMENTO
// ==========================================================

  mensagem +=

`

💳 *Pagamento:* ${pagamento.value}`;


// ==========================================================
// TROCO
// ==========================================================

  if (
    pagamento.value ===
    "Dinheiro"
  ) {

    const escolha =
      document.querySelector(
        'input[name="precisaTroco"]:checked'
      );


    if (!escolha) {

      alert(
        "Informe se precisa de troco."
      );

      return;
    }


    if (
      escolha.value ===
      "sim"
    ) {

      const trocoPara =
        Number(
          document
            .getElementById(
              "trocoPara"
            )
            .value
        );


      if (
        !trocoPara ||
        trocoPara <=
          calcularTotal()
      ) {

        alert(
          "Informe corretamente o valor para o troco."
        );

        return;
      }


      mensagem +=

`

💵 *Troco para:* ${formatarPreco(
        trocoPara
      )}

💰 *Troco aproximado:* ${formatarPreco(
        trocoPara -
        calcularTotal()
      )}`;

    } else {

      mensagem +=
        "\n💵 *Troco:* Não precisa";
    }
  }


// ==========================================================
// FINAL DA MENSAGEM
// ==========================================================

  mensagem +=

`

━━━━━━━━━━━━━━
Pedido realizado pelo site
*Bernardes Burger*
Sabor que representa! 🍔🔥`;


// ==========================================================
// WHATSAPP
// ==========================================================

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


  setTimeout(
    () => {

      notificacao
        .classList
        .remove(
          "mostrar"
        );

    },
    2500
  );
}


// ==========================================================
// CATEGORIAS
// ==========================================================

document
  .querySelectorAll(
    ".categoria"
  )
  .forEach(
    botao => {

      botao.addEventListener(
        "click",
        function () {

          document
            .querySelectorAll(
              ".categoria"
            )
            .forEach(
              item =>
                item
                  .classList
                  .remove(
                    "ativa"
                  )
            );


          this
            .classList
            .add(
              "ativa"
            );


          mostrarProdutos(
            this.dataset
              .categoria
          );
        }
      );
    }
  );


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
// SINCRONIZAR SACOLA
// ==========================================================

window.addEventListener(
  "storage",
  function (event) {

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

carregarProdutosSupabase();