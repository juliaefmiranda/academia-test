import { matricularAluno } from '../src/matricula.js';

describe('matricularAluno', () => {

    it('Deve recusar alunos com idade menor que 12 anos', () => {
        expect(() => matricularAluno(11)).toThrow('Idade fora da faixa permitida (12 a 100 anos)');
    });

    it('Deve recusar alunos com idade maior que 100 anos', () => {
        expect(() => matricularAluno(101)).toThrow('Idade fora da faixa permitida (12 a 100 anos)');
    });

    it('Deve aceitar a idade mínima permitida (12 anos)', () => {
        expect(matricularAluno(12, 'Julia')).toBe(12);
    });

    it('Deve aceitar a idade máxima permitida (100 anos)', () => {
        expect(matricularAluno(100, 'Julia')).toBe(100);
    });

    it('Deve recusar uma idade que não seja um número', () => {
        expect(() => matricularAluno('15')).toThrow('Idade inválida: informe um número');
    });

    it('Deve recusar uma idade undefined', () => {
        expect(() => matricularAluno(undefined)).toThrow('Idade inválida: informe um número');
    });

    it('Deve recusar uma idade null', () => {
        expect(() => matricularAluno(null)).toThrow('Idade inválida: informe um número');
    });

    it('Deve recusar uma idade NaN', () => {
        expect(() => matricularAluno(NaN)).toThrow('Idade inválida: informe um número');
    });

    it('Deve recusar a matrícula quando o campo nome estiver vazio', () => {
        expect(() => matricularAluno(15, '')).toThrow('Nome é obrigatório');
    });

    it('Deve recusar a matrícula quando o nome não for declarado', () => {
        expect(() => matricularAluno(15)).toThrow('Nome é obrigatório');
    });

    it('Deve recusar uma idade que esteja em números decimais', () => {
        expect(() => matricularAluno(17.2)).toThrow('Idade inválida: informe um número');
    });

    it('Deve recusar uma idade negativa', () => {
        expect(() => matricularAluno(-50)).toThrow('Idade fora da faixa permitida (12 a 100 anos)');
    });
});
