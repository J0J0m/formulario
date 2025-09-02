const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
        const PalavrasChave =  processatexto (texto) 

}    campoResultado.textContent = PalavrasChave .join(", ");


function processaTexto(texto){
 let palavras = Text.split (", ");
 return palavras;  
}
