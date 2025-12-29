function calculaIdade(anos) {
    return `Daqui há ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}
const mae = {
    nome: 'Maria',
    idade: 59
}
const pai = {
    nome: 'Manoel',
    idade: 63
}
const irma = {
    nome: 'Ana',
    idade: 36
}
const cunhado = {
    nome: 'Durval',
    idade: 38
}
const sobrinha = {
    nome: 'Sthéfany',
    idade: 17
}
const sobrinho = {
    nome: 'David Natan', 
    idade: 10
}
const gato = {
    nome: 'Charas',
    idade: 5
}

console.log(calculaIdade.call(mae, 10));