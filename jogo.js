window.onload = function() {
    document.addEventListener('deviceready', inicio, false);
}

let numeroCerto; // Variável global para armazenar o número a ser adivinhado

function inicio() {
    var botao = document.getElementById('botao');
    botao.addEventListener('click', apertou);
    
    var definirBotao = document.getElementById('definir');
    definirBotao.addEventListener('click', definirNumero);
}

function definirNumero() {
    var campoNumeroCerto = document.getElementById('numeroCerto');
    numeroCerto = parseInt(campoNumeroCerto.value); // Define o número a ser adivinhado
    if (isNaN(numeroCerto)) {
        alert("Por favor, insira um número válido.");
        return;
    }
    campoNumeroCerto.value = ''; // Limpa o campo após definir
    document.getElementById('saida').innerHTML = 'Número a ser adivinhado definido! Agora, tente adivinhar.';
}

function apertou() {
    var campoSaida = document.getElementById('saida');
    var campoNumero = document.getElementById('numero');
    var digitado = parseInt(campoNumero.value);

    if (isNaN(digitado)) {
        campoSaida.innerHTML = 'Por favor, digite um número válido!';
        return;
    }

    if (digitado === numeroCerto) {
        campoSaida.innerHTML = 'Acertou! Tente adivinhar um novo número.';
        campoNumero.value = ''; // Limpa o campo após acertar
    } else {
        if (digitado > numeroCerto) {
            campoSaida.innerHTML = 'Digite um número menor!';
        } else {
            campoSaida.innerHTML = 'Digite um número maior!';
        }
    }

    campoNumero.value = ''; // Limpa o campo após cada tentativa
}
