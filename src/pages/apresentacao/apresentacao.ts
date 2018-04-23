import { HomePage } from './../home/home';
import { NavController } from 'ionic-angular';
import { ViewChild, Component } from "@angular/core";

@Component({
  selector: "page-apresentacao",
  templateUrl: "apresentacao.html"
})
export class Apresentacao {

  // habilitando o slider de imagens
  @ViewChild('myslider') myslider: any;

  //criando um vetor de imagens para a apresentação
  elenco =[{
      "img"       : "https://cdn-images-1.medium.com/max/1280/1*iOmwue1uxW2O6sbDUEItPw.jpeg",
      "nome"      : "Angular 5.2",
      "descricao" : "O Melhor de Curso de Front do MUndo ..."
    },
    {
      "img"       : "http://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_standard/public/uploads/2017/01/mongodb-cover_0.jpeg",
      "nome"      : "Mongo DB",
      "descricao" : "O Melhor Banco do  MUndo ..."
    },
    {
      "img"       : "https://cdn-enterprise.discourse.org/ionicframework/uploads/default/original/3X/5/9/59963d686139d1fcb1fb2385ec12883b7d9d97a2.jpg",
      "nome"      : "Ionic 3",
      "descricao" : "O Melhor App Hibrido de Front do MUndo ..."
    }
];

  constructor(public navCtrl:  NavController){}

  //metodo para o slide anterior
  slidePrev() {
    this.myslider.slidePrev();
  }

  //metodo para o proximo slide
  slideNext() {
    this.myslider.slideNext();
  }

  entrar() {
    this.navCtrl.setRoot(HomePage);
  }

}
