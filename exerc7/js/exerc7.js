valor01 = parseInt(prompt("Digite o primeiro valor: "))
valor02 = parseInt(prompt("Digite o segundo valor: "))
valor03 = parseInt(prompt("Digite o terceiro valor: "))
valor04 = parseInt(prompt("Digite o quarto valor: "))
valor05 = parseInt(prompt("Digite o quinto valor: "))

if (valor01 > valor02) {
    maior = valor01 
    menor = valor02
}else{
    maior = valor02
    menor = valor01
}
if (maior < valor03) {
    maior = valor03
}else if (menor > valor03){
    menor = valor03
}
if (maior<valor04) {
    maior = valor04
}else if (menor > valor04) {
    menor = valor04
} 
if (maior < valor05) {
    maior = valor05
}else if (menor > valor05) {
    menor = valor05
}

alert("O maior valor é "+maior+"\nO menor valor é "+menor)
