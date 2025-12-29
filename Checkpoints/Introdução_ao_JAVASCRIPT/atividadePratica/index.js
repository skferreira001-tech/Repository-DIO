const alunos = [
    {
        nome: 'Mario',
        nota: 6,
        turma: '1A',
    },
    {
        nome: 'Luana',
        nota: 7,
        turma: '1A',
    },
    {
        nome: 'Luiz',
        nota: 5,
        turma: '1A',
    },
    {
        nome: 'Magda',
        nota: 8,
        turma: '1A',
    },
];

function alunosAprovados (arr, media) {
    let aprovados = [];
   
    for(let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    
    return aprovados;
}
console.log(alunosAprovados(alunos, 7))