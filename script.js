// e --> enter
// o --> ober
// i --> imes
// a --> ai
// u --> ufat

const botonEncriptar = document.querySelector(".encriptar");
const botonDesencriptar = document.querySelector(".desencriptar");
const botonCopiar = document.querySelector(".button");
const textoEncriptado = document.getElementById("textoEncriptado");
const imagen = document.querySelector(".munieco");
const titulo = document.getElementById("contenedor");
const parrafo = document.querySelector(".aviso2");

botonEncriptar.addEventListener("click", encriptarTexto);
botonDesencriptar.addEventListener("click", desencriptarTexto);

function encriptarTexto() {
  ocultarElementos();
  const textoOriginal = document.getElementById("texto-ingresado").value;
  const textoEncriptado = encriptar(textoOriginal);
  mostrarResultado(textoEncriptado);
}

function desencriptarTexto() {
  ocultarElementos();
  const textoEncriptado = document.getElementById("texto-ingresado").value;
  const textoDesencriptado = desencriptar(textoEncriptado);
  mostrarResultado(textoDesencriptado);
}

function ocultarElementos() {
  imagen.style.display = "none";
  titulo.style.display = "none";
  parrafo.style.display = "none";
}

function encriptar(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/o/g, "ober")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/u/g, "ufat");
}

function desencriptar(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/ober/g, "o")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ufat/g, "u");
}

function mostrarResultado(resultado) {
  textoEncriptado.textContent = resultado;
  textoEncriptado.style.display = "block";
  botonCopiar.style.display = "block";
}

botonCopiar.addEventListener("click", () => {
  const contenido = textoEncriptado.textContent;
  navigator.clipboard.writeText(contenido);
});
