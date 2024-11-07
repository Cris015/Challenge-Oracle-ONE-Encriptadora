var copiar = document.querySelector("#boton3"); // boton copiar
var texto = document.querySelector("#campo"); // textbox que copiara
var textoEnc = document.querySelector("#encriptado"); //textbox que encripta/desencripta
var enc = document.querySelector("#boton1"); //boton para encriptar
var desenc = document.querySelector("#boton2"); //boton para desencriptar

function copiarTexto(){

    texto.select();
    document.execCommand("copy");

}

function encriptar() {
    // he movido la "a" al medio para que no interfiera con la "i" al momento de leer el texto y no convierta la "i" de la a encriptada en una "i" encriptada ejemplo madre maimesmdrenter
    var te = textoEnc.value.replace(/[eé]/g, "enter").replace(/[ií]/g,"imes").replace(/[aá]/g,"ai").replace(/[oó]/g,"ober").replace(/[uú]/g,"ufat");
    texto.value = te;
    textoEnc.value="";

}

function desencriptar(){
    
    var te = textoEnc.value.replace(/enter/g, "e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    texto.value = te;
    textoEnc.value="";

}

copiar.onclick = copiarTexto;
enc.onclick = encriptar;
desenc.onclick = desencriptar;
