nota01 = parseInt(prompt("Olá professora, digite a primeira nota: "))
nota02 = parseInt(prompt("Digite a segunda nota: "))
nota03 = parseInt(prompt("Digite a terceira nota: "))
nota04 = parseInt(prompt("Digite a quarta e última nota: "))

media = (nota01+nota02+nota03+nota04)/4

if (media>=5) {
    alert("Aluno aprovado! \nTeve a média de "+media)
}else{
    alert("Aluno reprovado \nTeve média de "+media)
}