import { Aluno } from '../../pages/model/aluno-model';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunoProvider {

  alunos: Aluno[];

  public static ALUNOS = [
    {
      "id": 1,
      "nome": "Alexandre",
      "disciplina": "java",
      "nota1": 7,
      "nota2": 5,
      "media": 6,
      "situacao": "recuperacao",
      "foto": "https://acontecimentosdodiablog.files.wordpress.com/2017/07/15-de-julho-forest-whitaker-1961-e28093-56-anos-em-2017-acontecimentos-do-dia-foto-4.jpg"
    },
    {
      "id" : 2,
      "nome" : "vitor",
      "disciplina" : "java",
      "nota1" : 8,
      "nota2" : 8,
      "media" : 7,
      "situacao" :"aprovado",
      "foto" : "http://diariogaucho.rbsdirect.com.br/imagesrc/22836562.jpg"
   },
   {
    "id" : 3,
    "nome" : "hugo",
    "disciplina" : "angular 1",
    "nota1" : 10,
    "nota2" : 9,
    "media" : 9.5,
    "situacao" :"aprovado",
    "foto" : "http://2.bp.blogspot.com/-ARpAgxp66kQ/T3zsxviCe-I/AAAAAAAAAro/7ZXSW2xTHU4/s1600/RupertGrintasRonWeasley.jpg"
 }
] as Aluno[];


// ao inicializar o app a lista é preenchida
public init(): void {
  this.alunos = AlunoProvider.ALUNOS;
}

//método para adicionar alunos a lista
public adicionar(aluno: Aluno): void {
  this.alunos.push(aluno);
}

//método para retornar a lista cheia, preenchida
  public getAlunos(): Aluno[] {
    this.init();
    return this.alunos;
  }

}
