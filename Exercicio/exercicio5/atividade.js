let nota1, nota2, media
nota1 = Number(prompt(`Qual foi sua nota na primeira prova`))
nota2 = Number(prompt(`Qual foi sua nota na segunda prova`))

media = (nota1 + nota2) /2
let res = media >= 6 ? 'Aprovado' : 'Reprovado'
alert(`Voce esta ${res}`)