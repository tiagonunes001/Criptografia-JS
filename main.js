//Criptografia usando Cifra de César
const NormalText = "0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZÇÃÕÂÔÁÓÀÒÍabcdefghijklmnopqrstuvwxyzçãõâôáóàòí-_=+.:;!?*#$%@&'<>(){}[]"

// •Testar Criptografia
//let texto = "1▀Galinha pintada"

// •Testar Descriptografia 
//let texto = "JdolqkdCslqwdgd"  

let texto = ''

console.log("texto: " + texto)
console.log("tamanho: " + texto.length)

function criptograph(){
    let count = 0
    let letra = []
    while (count < texto.length) {
        //let crypto = NormalText.indexOf(texto[count])+3
        //console.log("old_[" + count + "] " + texto[count])
        
        var testeVal = NormalText.indexOf(texto[count])
        //console.log("teste: " + testeVal)
        if (testeVal == -1) {
            //console.log("[Warning!]")
            var valor = texto[count]
            var res1 = valor
        } else {
            //console.log("[OK]")
            var valor = NormalText.indexOf(texto[count])+3
            if (valor > 106) {
                //console.log("[Warning!]")
                valor = valor - 107
            }
            var res1 = NormalText[valor]
        }
        
        letra[count] = res1
        //console.log("new_[" + count + "] " + letra[count])
        count ++
    }
    
    var resul = letra.join("")
    return resul
}

function descriptograph(){
    let count = 0
    let letra = []
    while (count < texto.length) {
        //let crypto = NormalText.indexOf(texto[count])+3
        //console.log("old_[" + count + "] " + texto[count])
        
        var testeVal = NormalText.indexOf(texto[count])
        //console.log("teste: " + testeVal)
        if (testeVal == -1) {
            //console.log("[Warning!]")
            var valor = texto[count]
            var res1 = valor
        } else {
            //console.log("[OK]")
            var valor = NormalText.indexOf(texto[count])-3
            if (valor < 0) {
                //console.log("[Warning!]")
                valor = valor + 107
            }
            var res1 = NormalText[valor]
        }
        
        letra[count] = res1
        //console.log("new_[" + count + "] " + letra[count])
        count ++
    }
    
    var resul = letra.join("")
    return resul
}

//var n1 = criptograph()
//var n1 = descriptograph()
//console.log("New text = " + resul)

console.log("----------")
console.log("Crypto: " + n1)
console.log("----------")

function _cript(){
    let in_box = document.querySelector('textarea#in_box').value;
    let out_box = document.querySelector('textarea#out_box');
    texto = in_box
    var n1 = criptograph()
    out_box.innerHTML = n1 
}

function _descript(){
    let in_box = document.querySelector('textarea#in_box').value;
    let out_box = document.querySelector('textarea#out_box');
    texto = in_box
    var n1 = descriptograph()
    out_box.innerHTML = n1 
}

function _clean(){
    let in_box = document.querySelector('textarea#in_box').value;
    let out_box = document.querySelector('textarea#out_box');
    out_box.innerHTML = ''
    in_box.innerHTML = ''
}