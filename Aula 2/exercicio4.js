let nome, idade, genero, num1, num2

alert(`Bem-vindo ao meu programa!`);
nome = prompt(`Qual seu nome?`)
idade =  prompt(`Qual sua idade ?`)
genero = prompt(`Voce se identifica como?`)
num1 = Number (prompt(`Insira um numero`))
num2 = Number (prompt(`Insira outro numero`))

alert(`A soma é ${num1 + num2}, a diviao dos dois é ${ num1 / num2}`)

if (idade >= 18) {
    alert(`Pode entrar`)
}
else{
    alert(`Voce nao pode entrar `)
}

