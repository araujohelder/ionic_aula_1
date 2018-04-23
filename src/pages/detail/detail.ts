import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Aluno } from '../model/aluno-model';

@Component({
  selector: "page-detail",
  templateUrl: "detail.html"
})
export class DetailPage {

  //inicializando a classe aluno
  aluno: Aluno;

  //passando no construtor os parametros de navegação entre as telas
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.aluno = navParams.data.aluno;
  }
}
