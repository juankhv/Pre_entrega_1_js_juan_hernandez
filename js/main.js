function convertir(){
    let val = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 4900;
    let euro = 5200;
    let pesoMxn = 250;
    let pesoArg = 32;
    if (document.getElementById("uno").checked){
        resultado = val / dolar;
        alert(`El cambio de COP a USD es: $${resultado.toFixed(2)}`)
    }else if (document.getElementById("dos").checked){
        resultado = val / euro;
        alert(`El cambio de COP a EUR es: $${resultado.toFixed(2)}`)
    }else if (document.getElementById("tres").checked){
        resultado = val / pesoMxn;
        alert(`El cambio de COP a MXN es: $${resultado.toFixed(2)}`)
    }else if (document.getElementById("cuatro").checked){
        resultado = val / pesoArg;
        alert(`El cambio de COP a ARS es: $${resultado.toFixed(2)}`)

    }else{
        alert("Tienes que completar todos los requerimientos")
    }
}