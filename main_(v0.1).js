const NormalText = "0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZÇÃÕÂÔÁÓÀÒÍabcdefghijklmnopqrstuvwxyzçãõâôáóàòí-_=+.:;!?*#$%@&'<>(){}[]"

let texto = "}"
let crypto = NormalText.indexOf(texto[0])+3
let decrypt = null

if (crypto > 106) {
    console.log("[Warning!]")
    crypto = crypto - 107
}
 
console.log("indexOf: " + NormalText.indexOf(texto))
console.log("crypto: " + crypto)
//console.log(NormalText)
console.log(NormalText.length)
//console.log(NormalText.indexOf(texto))
console.log("----------")
console.log(NormalText[crypto])
console.log("----------")