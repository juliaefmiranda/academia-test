export class Turma {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.alunos = [];
    }

    matricular(nome) {
        if (this.alunos.length >= this.capacidade) {
            throw new Error('Turma lotada');
        }
        this.alunos.push(nome);
        return this.alunos.length;
    }
}