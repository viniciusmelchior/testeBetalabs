let categorias = ['verão', 'saias', 'tenis', 'fraldas', 'conjunto', 'perfume', 'personagens'];

 let macacao = {
    id: 1,
    nome: 'macacao',
    descricao: 'macacão verde e roxo para recem nascidos',
    imagem: 'https://a-static.mlcdn.com.br/1500x1500/kit-8-conjuntos-infantil-masculino-roupa-menino-atacado-4-anos-naer-moda-infantil/naermoda-infantil/47a71912196c11eb897f4201ac18502e/efb816ee02c655eae868a357c3cd66a6.jpg',
    preco: 16.90.toFixed(2),
    categoria: categorias[0]
}

let fralda = {
    id: 2,
    nome: 'fralda',
    descricao: 'fralda para menores de 6 meses recém nascidos',
    imagem: 'https://a-static.mlcdn.com.br/1500x1500/kit-8-conjuntos-infantil-masculino-roupa-menino-atacado-4-anos-naer-moda-infantil/naermoda-infantil/47a71912196c11eb897f4201ac18502e/efb816ee02c655eae868a357c3cd66a6.jpg',
    preco: 44.90.toFixed(2),
    categoria: categorias[1]
}

let touca = {
    id: 3,
    nome: 'touca preta',
    descricao: 'pequena touca para recem nascidos',
    imagem: 'https://a-static.mlcdn.com.br/618x463/touca-bebe-menino-menina-6-12-meses-tampa-orelha-forrada-la-1-pcs-super-fofas-inverno-quente-touca-baby/abuseeuse/12115141708/a6b3f8117cd19513ec050d5d4051e5fd.jpg',
    preco: 27.90.toFixed(2),
    categoria: categorias[0]
}

let luva = {
    id: 4,
    nome: 'touca preta',
    descricao: 'pequena touca para recem nascidos',
    imagem: 'https://a-static.mlcdn.com.br/618x463/touca-bebe-menino-menina-6-12-meses-tampa-orelha-forrada-la-1-pcs-super-fofas-inverno-quente-touca-baby/abuseeuse/12115141708/a6b3f8117cd19513ec050d5d4051e5fd.jpg',
    preco: 27.90.toFixed(2),
    categoria: categorias[0]
}


let produtos = [macacao, fralda, touca, luva];

for( categoria of categorias ) {
    getCategorias();
} 

function criaItem(){
    let teste = document.querySelector('.teste');
    var titulo = document.createElement('h1');
    titulo.textContent = produto.nome;
    teste.appendChild(titulo);
    var descricao = document.createElement('p');
    descricao.textContent = produto.descricao;
    teste.appendChild(descricao);
    var imagem = document.createElement('img')
    imagem.src = produto.imagem
    imagem.classList.add('img')
    teste.appendChild(imagem)
    var preco = document.createElement('p');
    preco.textContent = produto.preco;
    teste.appendChild(preco)
}

function getCategorias(){
    let categoriaElement = document.querySelector('#lista-categorias')
    var categoriaTitulo = document.createElement('li')
    categoriaTitulo.classList.add('container')
    var categoriaLink = document.createElement('a')
    categoriaLink.textContent = categoria
    categoriaLink.setAttribute("href", "categoria.html") 
    categoriaElement.appendChild(categoriaTitulo)
    categoriaTitulo.appendChild(categoriaLink)
}

for( produto of produtos ) {
    criaProduto();
}

function criaProduto(){
    let cardGroup = document.querySelector('.mais-vendido-cards');
    let card = document.createElement('a');
    card.classList.add('card-item')
    cardGroup.appendChild(card)

    card.setAttribute("href", "produto.html");

    let imageWrapper = document.createElement('div')
    imageWrapper.classList.add('img-wrapper')
    card.appendChild(imageWrapper)

    let itemImage = document.createElement('img')
    itemImage.src = produto.imagem
    imageWrapper.appendChild(itemImage)

    let descricao = document.createElement('p')
    descricao.classList.add('descricao')
    descricao.textContent = produto.descricao
    card.appendChild(descricao)

    let preco = document.createElement('p')
    preco.classList.add('preco')
    preco.textContent = "R$"+produto.preco
    card.appendChild(preco)
}

/**auto slider */

var contador = 1;

setInterval(()=>{
    document.getElementById('radio' + contador).checked = true;
    contador++;
    if( contador > 4) {
        contador = 1;
    }
}, 5000)











