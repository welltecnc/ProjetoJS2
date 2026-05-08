function trocar(cor){
    document.body.style.background=cor;
}
// Array de Objetos(banco de dados)
const produtos=[
    {nome:"Teclado Gamer",preco:200,emPromocao:true},
    {nome:"Mouse Gamer",preco:150,emPromocao:false},
    {nome:"Monitor Gamer",preco:200,emPromocao:true},
    {nome:"Pad Mouse",preco:50,emPromocao:false},
];

//Map- transforam o array de objetos em um unico array no html

const container = document.getElementById("lista-produtos");
const mostrarTotal = document.getElementById("resultado-total");

function cardProdutos(lista){
    mostrarTotal.innerText="";
    const htmlProdutos =lista.map(item =>`
        <div class="card">
            <h3>${item.nome}</h3>
            <p>Preço: R$ ${item.preco}</p>
            ${item.emPromocao ? "<span class='tag'>Promoção</span>":""}
        </div>
        `).join('');
        container.innerHTML =htmlProdutos;
}

//FILTER - Cria uma nova lista apenas com o que selecionou

function filtrarPromocoes(){
    const promocionais=produtos.filter(item => item.emPromocao);
    cardProdutos(promocionais);
}
//REDUCE- Reduz o array a um unico valor (soma dos preços)
// ``- crase - chamada de template string significa concatenar
function calcularTotal(){
    const total=produtos.reduce((acumulador,item)=>{
        return acumulador + item.preco;
    },0)

    mostrarTotal.innerText =` Valor total é de R$ ${total}`
}