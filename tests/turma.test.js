import { Turma } from "../src/turma";

describe('Turma', () => {
    let turma;

    beforeEach(() => {
        turma = new Turma(2);
    });

    afterEach(() => {
        turma = null;
    });

    it('Deve matricular um aluno enquanto houver vaga disponível', () => {
        const turma = new Turma(2);
        expect(turma.matricular('Gabi Emi')).toBe(1);
    });

    it('Deve recusar novas matrículas quando a turma estiver cheia', () => {
        const turmaLotada = new Turma(1);
        turmaLotada.matricular('Gabi Emi');
        expect(() => turmaLotada.matricular('Julia')).toThrow('Turma lotada');
    });

    it('Deve matricular alunos enquanto houverem vagas disponíveis', () => {
        const turma = new Turma(2);
        expect(turma.matricular('Gabi Emi')).toBe(1);
        expect(turma.matricular('Julia')).toBe(2);
    })
})