//Desafio 1 - Pontuação de Atletismo

//Declaração das variáveis.
let tempo100m;
let alturaSalto;
let distanciaArremesso;
let distanciaSalto;
let tempo800m;
let pontuacaoCorrida100Metros;
let pontuacaoSaltoEmAltura;
let pontuacaoArremessoDePeso;
let pontuacaoSaltoEmDistancia;
let pontuacaoCorrida800Metros;

//Calculando a pontuação do João Mendes.
tempo100m = 12.5;
alturaSalto = 1.8;
distanciaArremesso = 10.5;
distanciaSalto = 6.4;
tempo800m = 150;
pontuacaoCorrida100Metros = 0.72 * tempo100m;
pontuacaoSaltoEmAltura = 3.79 * alturaSalto;
pontuacaoArremessoDePeso = 1.5 * distanciaArremesso;
pontuacaoSaltoEmDistancia = 1.05 * distanciaSalto;
pontuacaoCorrida800Metros = 0.14 * tempo800m;
const pontuacaoJoaoMendes = pontuacaoCorrida100Metros + pontuacaoSaltoEmAltura + pontuacaoArremessoDePeso + pontuacaoSaltoEmDistancia + pontuacaoCorrida800Metros;
//console.log(pontuacaoJoaoMendes); //verificando a pontuação

//Calculando a pontuação do Pedro Silva.
tempo100m = 11.8;
alturaSalto = 1.6;
distanciaArremesso = 9.8;
distanciaSalto = 6.2;
tempo800m = 145;
pontuacaoCorrida100Metros = 0.72 * tempo100m;
pontuacaoSaltoEmAltura = 3.79 * alturaSalto;
pontuacaoArremessoDePeso = 1.5 * distanciaArremesso;
pontuacaoSaltoEmDistancia = 1.05 * distanciaSalto;
pontuacaoCorrida800Metros = 0.14 * tempo800m;
const pontuacaoPedroSilva = pontuacaoCorrida100Metros + pontuacaoSaltoEmAltura + pontuacaoArremessoDePeso + pontuacaoSaltoEmDistancia + pontuacaoCorrida800Metros;
//console.log(pontuacaoPedroSilva); //verificando a pontuação

//Verificando o vencedor.
const seVencedorJoaoMendes = pontuacaoJoaoMendes > pontuacaoPedroSilva;
const seVencedorPedroSilva = pontuacaoJoaoMendes < pontuacaoPedroSilva;
console.log("O João Mendes foi o vencedor? ", seVencedorJoaoMendes);
console.log("O Pedro Silva foi o vencedor? ", seVencedorPedroSilva);