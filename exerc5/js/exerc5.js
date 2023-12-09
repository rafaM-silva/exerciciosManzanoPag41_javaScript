valor01 = parseInt(prompt("Escreva o primeiro valor: "))
valor02 = parseInt(prompt("Escreva o segundo valor: "))
valor03 = parseInt(prompt("Escreva o terceiro valor: "))

if (valor01 > valor02 && valor02 > valor03) {
    alert("Ordem crescente \n" + valor01+", "+valor02+", "+valor03)
} else if (valor02 > valor01 && valor01 > valor03) {
    alert("Ordem crescente \n" + valor02+", "+ valor01+", "+valor03)
} else if (valor01 > valor02 && valor03 > valor02) {
    alert("Ordem crescente \n" + valor01+", "+valor03+", "+valor02)
} else if (valor02 > valor01 && valor03 > valor01) {
    alert("Ordem crescente \n" + valor02+", "+valor03+", "+valor01)
} else if (valor03 > valor02 && valor01 > valor02) {
    alert("Ordem crescente \n" + valor03+", "+valor01+", "+valor02)
} else {
    alert("Ordem crescente \n" + valor03+", "+valor02+", "+valor01)
}