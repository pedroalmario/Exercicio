let nome, nota1, nota2, media;


alert(`Olá!`);
nome = prompt(`Qual seu nome?`)
nota1 = Number (prompt(`${nome} Quanto você tirou na 1° prova?`))
nota2 =  Number (prompt(`Quanto tiou na sua 2° prova?`))
media = (nota1 + nota2) /2
alert(`${nome} Sua nota é: ${media}`)
