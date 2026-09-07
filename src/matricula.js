export function matricularAluno(idade, nome) {
    if (typeof idade !== 'number' || Number.isNaN(idade) || !Number.isInteger(idade)) {
        throw new Error('A idade não é um número válido.');
    }

    if (idade < 12 || idade > 100) {
        throw new Error('Idade fora do permitido (entre 12 e 100 anos)');
    }

    if (typeof nome !== 'string' || nome.trim() === '') {
        throw new Error('O nome é um campo obrigatório.');
    }

    return idade;
} 