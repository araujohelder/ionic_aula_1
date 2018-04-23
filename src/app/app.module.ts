import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from './../pages/detail/detail';
import { Apresentacao } from './../pages/apresentacao/apresentacao';

import { AlunoProvider } from './provider/aluno-provider';
import { Apresentacao } from '../pages/apresentacao/apresentacao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    Apresentacao
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    Apresentacao
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlunoProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
