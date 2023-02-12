// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura =Number(prompt('Digite a altura :'))
  const largura =Number(prompt('Digite a largura :'))
  const calcularAreaRetangulo = altura * largura
  console.log(calcularAreaRetangulo)


}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoNascimento =Number(prompt('Digite o seu ano de nascimento :'))
  const anoAtual =Number(prompt('Digite em que ano estamos :'))
  const calcularIdade = anoNascimento - anoAtual
  console.log(calcularIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const calcularImc = peso / (altura * altura)
  return(calcularImc)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUser =prompt('Digite seu nome :')
  const idadeUser =Number(prompt('Digite a sua idade :'))
  const emailUser =prompt('Digite seu e-mail :')
  const informacoesUser = `Meu nome é ${nomeUser}, tenho ${idadeUser} anos, e o meu email é ${emailUser}.`
  console.log(informacoesUser)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFav1 =prompt('Diga sua primeira cor favorita :')
  const corFav2 =prompt('Diga sua segunda cor favorita :')
  const corFav3=prompt('Diga sua terceira cor favorita :')
  const minhasCoresFavoritas = [corFav1, corFav2, corFav3]
  console.log(minhasCoresFavoritas)
  
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const transformaEmMaiusculo = string.toUpperCase()
  return transformaEmMaiusculo

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const calculoOrçamento = custo / valorIngresso
  return calculoOrçamento

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length == string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const ultimoElemento = array[array.length-1]
return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElementoArray = array[0]
  const ultimoElementoArray = array[array.length-1]
  array[0] = ultimoElementoArray
  array[array.length-1] = primeiroElementoArray
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const igualandoCaseString1 = string1.toLowerCase()
  const igualandoCaseString2 = string2.toLowerCase()
  const comparandoStrings = igualandoCaseString1 === igualandoCaseString2
  return comparandoStrings

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual =Number(prompt('Digite o ano atual: '))
  const anoNascimento =Number(prompt('Digite o seu ano de nascimento: '))
  const anoEmissaoRg =Number(prompt('Digite o ano de emissão do RG: '))
  const idade = anoAtual - anoNascimento
  const tempoDeEmissao = anoAtual - anoEmissaoRg
  if (idade <= 20) {
    console.log(tempoDeEmissao >= 5)
  } else if (idade <= 50) {
    console.log(tempoDeEmissao >= 10)
  } else {
    console.log(tempoDeEmissao >= 15)
  }

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoMultiplo400 = ano % 400 === 0
  const anoMultiplo4 = ano % 4 === 0
  const anoMultiplo100 =ano % 100 != 0
  const anoBissexto = anoMultiplo400 || (anoMultiplo4 && anoMultiplo100)
  return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade =prompt("Você tem mais de 18 anos? 'sim' ou 'não'")
  const escolaridade =prompt("Você possui ensino médio completo? 'sim' ou 'não'")
  const disponibilidade =prompt("Você possui disponibilidade exclusiva durante os horários do curso? 'sim' ou 'não'")
  const resposta = idade.toLowerCase() === "sim" && escolaridade.toLowerCase() === "sim" && disponibilidade.toLowerCase() === "sim"

  console.log(resposta)
  
}