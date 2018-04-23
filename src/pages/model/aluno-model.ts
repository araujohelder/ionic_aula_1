export class Aluno {

  id: number;
  nome: string;
  disciplina: string;
  nota1: number;
  nota2: number;
  media: number;
  situacao: string;
  foto: string;

  constructor()
  constructor(id?: number, nome?: string, disciplina?: string,
    nota1?: number, nota2?: number, foto?: string  ){
      this.id = id;
      this.nome = nome;
      this.disciplina = disciplina;
      this.nota1 = nota1;
      this.nota2 = nota2;
      this.foto = foto;
    }
}
