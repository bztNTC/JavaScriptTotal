// Obtém a referência ao botão "Limpar" pelo seu ID
const botaoLimpar = document.getElementById("limpar");

// Adiciona um ouvinte de eventos para o clique no botão "Limpar"
botaoLimpar.addEventListener("click", function () {
  // Chama a função para limpar os elementos específicos
  limparElemento(document.getElementById("historyText"));
  limparElemento(document.getElementById("value-to-convert"));
  limparElemento(document.getElementById("result"));
});

// Função para limpar um elemento, seja ele um campo de entrada ou uma área de texto
function limparElemento(elemento) {
  // Limpa os valores de campos de entrada
  elemento.value = "";

  // Limpa os textos de áreas de texto
  elemento.innerText = "";
}

// Função para realizar a conversão com base no valor e na unidade selecionada
function realizarConversao(valor, unidade) {
  let resultado;

  // Realiza a conversão com base na unidade selecionada
  switch (unidade) {
    case "cm":
      resultado = valor * 0.393701;
      break;
    case "in":
      resultado = valor * 2.54;
      break;
    case "m":
      resultado = valor * 39.3701;
      break;
    case "ft":
      resultado = valor * 30.48;
      break;
    default:
      resultado = "Unidade não suportada";
  }

  return resultado;
}

// Adiciona um ouvinte de eventos para o clique no botão de conversão
document
  .getElementById("convert-button")
  .addEventListener("click", function () {
    // Obtém o valor a ser convertido do campo de entrada
    const valorParaConverter = parseFloat(
      document.getElementById("value-to-convert").value
    );

    // Obtém a unidade selecionada a partir do seletor de unidades
    const unitSelector = document.getElementById("unit-selector");
    const selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;

    // Exibe informações no console para fins de depuração
    console.log(valorParaConverter, unitSelector, selectedUnit);

    // Verifica se o valor é igual a zero ou se não é um número (NaN)
    if (valorParaConverter == 0 || isNaN(valorParaConverter)) {
      // Obtém o elemento de resultado
      const resultadoElemento = document.getElementById("result");

      // Define o texto de erro e atualiza as classes de estilo
      resultadoElemento.textContent = "Escolha um valor diferente de zero";
      resultadoElemento.classList.remove("normalMessage");
      resultadoElemento.classList.add("errorMessage");
    } else {
      // Realiza a conversão com base na função realizarConversao
      const resultado = realizarConversao(valorParaConverter, selectedUnit);

      // Exibe informações no console para fins de depuração
      console.log(resultado);

      // Obtém o elemento de resultado
      const resultadoElemento = document.getElementById("result");

      // Define o texto do resultado com base na unidade selecionada
      let text = ` ${valorParaConverter} ${selectedUnit} é igual a ${resultado.toFixed(
        2
      )}`;

      // Verifica a unidade selecionada e ajusta o texto em conformidade
      if (selectedUnit == "cm" || selectedUnit == "m") {
        text = text + " polegadas";
      } else {
        text = text + " centímetros";
      }

      // Define o texto do resultado e do histórico
      resultadoElemento.textContent = text;

      // Atualiza o histórico de conversões
      const historyText = document.getElementById("historyText");
      historyText.innerText =
        historyText.innerText + "\n" + resultadoElemento.textContent;
    }
  });
