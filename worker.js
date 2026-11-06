const WHATSAPP = "5587996682323";

const HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#050505">
<title>007 MULTIMARCAS | Moda masculina</title>
<meta name="description" content="007 MULTIMARCAS — moda masculina e acessórios. Seu estilo. Sua identidade. 007.">

<style>
*{box-sizing:border-box}
body{margin:0;background:#f6f6f6;color:#111;font-family:Arial,Helvetica,sans-serif}
a{color:inherit;text-decoration:none}
button{font:inherit;cursor:pointer}

header{
background:#050505;color:#fff;padding:18px 5%;
display:flex;align-items:center;justify-content:space-between;
gap:16px;position:sticky;top:0;z-index:5
}

.brand{font-size:38px;font-weight:800;letter-spacing:-2px;line-height:1}
.brand small{display:block;font-size:12px;letter-spacing:6px;font-weight:400;margin-top:7px;color:#aaa}

nav{display:flex;gap:20px;font-size:13px;color:#ddd}
.icons{display:flex;align-items:center;gap:16px}
.iconbtn{background:none;border:0;color:#fff;font-size:20px}
.count{font-size:12px;background:#fff;color:#000;border-radius:50%;padding:3px 7px;margin-left:2px}

.hero{
background:#080808;color:#fff;text-align:center;
padding:70px 20px 76px
}
.hero .eyebrow{color:#aaa;letter-spacing:5px;font-size:11px}
.hero h1{font-size:clamp(34px,7vw,64px);margin:18px 0 12px;letter-spacing:2px}
.hero p{color:#bbb;letter-spacing:3px;font-size:13px}
.hero a,.primary{
display:inline-block;background:#fff;color:#050505;
padding:13px 23px;border:0;margin-top:22px;
font-weight:700;letter-spacing:1px
}

main{max-width:1120px;margin:auto;padding:42px 20px}
.section-title{text-align:center;margin:0 0 10px;font-size:26px;letter-spacing:2px}
.sub{text-align:center;color:#777;margin:0 0 30px;font-size:14px}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(230px,1fr));
gap:20px
}

.product{background:#fff;border:1px solid #e3e3e3;padding:14px}
.photo{
height:220px;background:linear-gradient(135deg,#eee,#d9d9d9);
display:flex;align-items:center;justify-content:center;
color:#777;font-size:12px;letter-spacing:2px;text-align:center
}
.product h3{font-size:16px;margin:15px 0 7px}
.muted{color:#777;font-size:13px}
.price{font-size:21px;font-weight:700;margin:12px 0}

.product select,.product input{
width:100%;padding:11px;border:1px solid #ccc;
background:white;margin:5px 0
}

.product button{
width:100%;padding:12px;background:#050505;
color:white;border:0;margin-top:8px
}

.info{background:#fff;padding:25px;margin-top:38px;border:1px solid #e5e5e5}
.info h2{font-size:20px}
.info p{color:#555;line-height:1.7}

footer{background:#050505;color:#aaa;text-align:center;padding:45px 20px}
footer .brand{color:white;font-size:34px}
footer .links{display:flex;justify-content:center;flex-wrap:wrap;gap:22px;margin:28px 0}

#cart{
display:none;position:fixed;inset:0;background:#0009;
z-index:10;padding:18px
}
.cartbox{
background:white;max-width:480px;margin:35px auto;
padding:24px;max-height:85vh;overflow:auto
}
.carthead{display:flex;justify-content:space-between;align-items:center}
.carthead button{border:0;background:none;font-size:25px}
#itens p{
border-bottom:1px solid #eee;padding:10px 0;
display:flex;justify-content:space-between;gap:8px
}
#itens button{border:0;background:#eee;padding:5px 8px}
#total{font-size:20px;font-weight:700;margin:20px 0}
.checkout{
width:100%;padding:14px;background:#050505;
color:white;border:0;font-weight:700
}
.whats{
position:fixed;right:18px;bottom:18px;
background:#111;color:white;border:1px solid #777;
border-radius:30px;padding:13px 17px;z-index:6
}

@media(max-width:650px){
header{padding:15px 18px}
.brand{font-size:31px}
nav{display:none}
.hero{padding:58px 18px}
.hero p{letter-spacing:2px}
main{padding:32px 15px}
.photo{height:190px}
}
</style>
</head>

<body>

<header>
<a class="brand" href="#">007<small>MULTIMARCAS</small></a>

<nav>
<a href="#">Início</a>
<a href="#produtos">Produtos</a>
<a href="#sobre">Sobre nós</a>
<a href="#contato">Contato</a>
</nav>

<div class="icons">
<button class="iconbtn" aria-label="Abrir carrinho" onclick="abrirCarrinho()">
🛒<span class="count" id="quantidade">0</span>
</button>
<button class="iconbtn" aria-label="Menu" onclick="document.getElementById('produtos').scrollIntoView()">
☰
</button>
</div>
</header>

<section class="hero">
<div class="eyebrow">MODA MASCULINA • ACESSÓRIOS</div>
<h1>SEU ESTILO. SUA IDENTIDADE.</h1>
<p>QUALIDADE • PERSONALIDADE • PRESENÇA</p>
<a href="#produtos">CONHEÇA A COLEÇÃO</a>
</section>

<main>

<section id="produtos">
<h2 class="section-title">DESTAQUES</h2>
<p class="sub">Escolha seu produto, tamanho e cor. Finalize seu pedido pelo WhatsApp.</p>

<div class="grid">

<article class="product">
<div class="photo">007 MULTIMARCAS<br>SHORT SARJA PREMIUM</div>

<h3>Short Masculino Sarja Premium — Polo Ralph Lauren</h3>
<div class="muted">Produto 001 • Moda masculina</div>
<div class="price">R$ 80,00</div>

<label class="muted" for="cor001">Cor</label>
<select id="cor001">
<option value="Preto">Preto</option>
<option value="Branco">Branco</option>
<option value="Azul bebê">Azul bebê</option>
<option value="Azul escuro">Azul escuro</option>
<option value="Marrom">Marrom</option>
</select>

<label class="muted" for="tam001">Tamanho</label>
<select id="tam001">
<option value="P">P</option>
<option value="M">M</option>
<option value="G">G</option>
</select>

<button onclick="adicionarShort()">ADICIONAR AO CARRINHO</button>
</article>

</div>
</section>

<section class="info" id="sobre">
<h2>Sobre a 007 MULTIMARCAS</h2>
<p>
A 007 MULTIMARCAS nasceu em 2026 com o propósito de oferecer
moda masculina e acessórios, reunindo estilo, qualidade e
personalidade em um só lugar. Nosso compromisso é proporcionar
uma experiência de compra prática, atendimento próximo e produtos
que valorizam o estilo de cada cliente.
</p>
<p><strong>SEU ESTILO. SUA IDENTIDADE. 007.</strong></p>
</section>

<section class="info" id="contato">
<h2>Central de Atendimento</h2>
<p><strong>WhatsApp:</strong> (87) 99668-2323</p>
<p><strong>Instagram:</strong> @007multimarcas_</p>
<p><strong>E-mail:</strong> Ianvictoralves007@gmail.com</p>
<p><strong>Atendimento:</strong> todos os dias, das 06h às 22h.</p>
<p><strong>Entrega:</strong> consulte as condições pelo WhatsApp.</p>
<p><strong>Pagamento:</strong> PIX, cartão e dinheiro. A confirmação será feita pelo WhatsApp.</p>
</section>

</main>

<footer>
<div class="brand">007<small>MULTIMARCAS</small></div>
<p>ESTILO • QUALIDADE • PRESENÇA</p>
<div class="links">
<a href="#contato">Contato</a>
<a href="#sobre">Sobre nós</a>
<a href="#produtos">Produtos</a>
</div>
<p>© 2026 007 MULTIMARCAS. Todos os direitos reservados.</p>
</footer>

<div id="cart">
<div class="cartbox">

<div class="carthead">
<h2>Seu carrinho</h2>
<button onclick="fecharCarrinho()" aria-label="Fechar">×</button>
</div>

<div id="itens">Seu carrinho está vazio.</div>
<div id="total">Total: R$ 0,00</div>

<button class="checkout" onclick="finalizar()">
FINALIZAR PELO WHATSAPP
</button>

</div>
</div>

<button class="whats" onclick="falarWhatsApp()">Falar no WhatsApp</button>

<script>
const WHATSAPP = "5587996682323";
let carrinho = [];

const estoqueShort = {
"Preto": {P:2, M:1, G:1},
"Branco": {P:2, M:1, G:0},
"Azul bebê": {P:0, M:1, G:0},
"Azul escuro": {P:1, M:1, G:0},
"Marrom": {P:2, M:1, G:0}
};

function adicionarShort() {
const cor = document.getElementById("cor001").value;
const tamanho = document.getElementById("tam001").value;
const disponivel = estoqueShort[cor][tamanho];

const jaNoCarrinho = carrinho.filter(
p => p.cor === cor && p.tamanho === tamanho
).length;

if (jaNoCarrinho >= disponivel) {
alert("Essa combinação de cor e tamanho está sem estoque disponível.");
return;
}

carrinho.push({
nome:"Short Sarja Premium Polo Ralph Lauren",
cor:cor,
tamanho:tamanho,
preco:80
});

atualizarCarrinho();
abrirCarrinho();
}

function atualizarCarrinho() {
document.getElementById("quantidade").textContent = carrinho.length;

const itens = document.getElementById("itens");
let total = 0;

if (!carrinho.length) {
itens.textContent = "Seu carrinho está vazio.";
} else {
itens.innerHTML = "";

carrinho.forEach((produto, indice) => {
total += produto.preco;

const linha = document.createElement("p");
const descricao = document.createElement("span");

descricao.textContent =
produto.nome + " — " + produto.cor + ", " +
produto.tamanho + " — R$ " +
produto.preco.toFixed(2).replace(".", ",");

const remover = document.createElement("button");
remover.textContent = "Remover";

remover.onclick = function() {
carrinho.splice(indice, 1);
atualizarCarrinho();
};

linha.appendChild(descricao);
linha.appendChild(remover);
itens.appendChild(linha);
});
}

document.getElementById("total").textContent =
"Total: R$ " + total.toFixed(2).replace(".", ",");
}

function abrirCarrinho() {
document.getElementById("cart").style.display = "block";
}

function fecharCarrinho() {
document.getElementById("cart").style.display = "none";
}

function falarWhatsApp() {
window.location.href = "https://wa.me/" + WHATSAPP;
}

function finalizar() {
if (!carrinho.length) {
alert("Seu carrinho está vazio.");
return;
}

let mensagem =
"Olá! Quero fazer um pedido na 007 MULTIMARCAS:\n\n";

let total = 0;

carrinho.forEach(produto => {
mensagem += produto.nome + " — " +
produto.cor + ", tamanho " + produto.tamanho +
" — R$ " +
produto.preco.toFixed(2).replace(".", ",") + "\n";

total += produto.preco;
});

mensagem += "\nTotal: R$ " +
total.toFixed(2).replace(".", ",");

mensagem +=
"\nGostaria de confirmar disponibilidade, entrega e pagamento.";

window.location.href =
"https://wa.me/" + WHATSAPP +
"?text=" + encodeURIComponent(mensagem);
}
</script>

</body>
</html>`;

export default {
async fetch(request) {
if (request.method !== "GET" && request.method !== "HEAD") {
return new Response("Método não permitido", {status:405});
}

return new Response(HTML, {
headers: {
"Content-Type":"text/html; charset=UTF-8"
}
});
}
};
