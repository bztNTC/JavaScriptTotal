//Dados do atleta 1
const atleta1Nome = "João Mendes";
const atleta1Corrida100Metros = 12.5;
const atleta1SaltoEmAltura = 1.8;
const atleta1ArremessoDePeso = 10.5;
const atleta1SaltoEmDistancia = 6.4;
const atleta1Corrida800Metros = 150;
const atleta1PontuacaoFinal = (0.72 * atleta1Corrida100Metros) + (3.79 * atleta1SaltoEmAltura) + (1.5 * atleta1ArremessoDePeso) + (1.05 * atleta1SaltoEmDistancia) + (0.14 * atleta1Corrida800Metros);

//Dados do atleta 2
const atleta2Nome = "Pedro Silva";
const atleta2Corrida100Metros = 11.8;
const atleta2SaltoEmAltura = 1.;
const atleta2ArremessoDePeso = 9.8;
const atleta2SaltoEmDistancia = 6.2;
const atleta2Corrida800Metros = 145;
const atleta2PontuacaoFinal = (0.72 * atleta2Corrida100Metros) + (3.79 * atleta2SaltoEmAltura) + (1.5 * atleta2ArremessoDePeso) + (1.05 * atleta2SaltoEmDistancia) + (0.14 * atleta2Corrida800Metros);

//Conferindo qual atleta ganhou
if (atleta1PontuacaoFinal > atleta2PontuacaoFinal){
    console.log(`O atleta ${atleta1Nome} ganhou com a pontuação final de ${atleta1PontuacaoFinal}.`);
} else {
    console.log(`O atleta ${atleta2Nome} ganhou com a pontuação final de ${atleta2PontuacaoFinal}.`);
}