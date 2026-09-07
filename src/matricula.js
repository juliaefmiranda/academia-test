export function matricularAluno(idade, nome) {
    if (typeof idade !== 'number' || Number.isNaN(idade) || !Number.isInteger(idade)) {
        throw new Error('Idade inválida: informe um número');
    }

    if (idade < 12 || idade > 100) {
        throw new Error('Idade fora da faixa permitida (12 a 100 anos)');
    }

    if (typeof nome !== 'string' || nome.trim() === '') {
        throw new Error('Nome é obrigatório');
    }

    return idade;
} 