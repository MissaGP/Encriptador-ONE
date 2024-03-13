const textArea = document.querySelector(".text-area");
const textRespuesta = document.querySelector(".respuesta");
var munieco = document.querySelector(".muneco");
var contenedor = document.querySelector(".caja");

function btnEncriptar(){
    
    const textoEncriptado = encriptar (textArea.value);
    textRespuesta.value = textoEncriptado;
    textArea.value = "";
    ocultarAdelante();
}

function encriptar(stringEncriptado){
    let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCode.length; i++){
        if(stringEncriptado.includes(matrizCode[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCode[i][0], matrizCode[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    
    const textoEncriptado = desencriptar(textArea.value);
    textRespuesta.value = textoEncriptado;
    ocultarAdelante();
}

function desencriptar(stringDesencriptado){
    let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCode.length; i++){
        if(stringDesencriptado.includes(matrizCode[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCode[i][1], matrizCode[i][0])
        }
    }
    return stringDesencriptado
}

function btnCopiar(){
    var contenido = document.querySelector(".respuesta");
    contenido.select();
    document.execCommand("copy");
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}