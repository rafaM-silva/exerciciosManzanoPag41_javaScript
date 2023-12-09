valor01 = parseInt(prompt("Digite o primeiro valor: "))
valor02 = parseInt(prompt("Digite o segundo valor: "))

if (valor01>valor02) {
    diferenca = valor01 - valor02
    alert("A diferença entre os valores é de: "+diferenca)
}else{
    alert("O primeiro valor tem que ser maior que o segundo")
}