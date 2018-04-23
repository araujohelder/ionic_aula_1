import { DetailPage } from './../detail/detail';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { Aluno } from './../model/aluno-model';
import { AlunoProvider } from './../../app/provider/aluno-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //declarando o vetor de alunos
  alunos: Aluno[];

  //passando os parâmetros no construtor da navegação entre as
  //paginas, do Loading(tempo de espera) e da lista provider
  constructor(
    public navCtrl: NavController,
    public loading: LoadingController,
    private service: AlunoProvider
  ) {
    this.alunos = this.service.getAlunos();
  }

  //habilitando o botao de ir para detalhes
  irParaDetail(aluno) {
    this.navCtrl.push(DetailPage,{ aluno })

  }

}
