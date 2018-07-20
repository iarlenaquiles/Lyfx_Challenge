import { DetailsPage } from './../details/details';
import { AdventureProvider } from './../../providers/adventure/adventure';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public lista:any = [];

  constructor(public navCtrl: NavController, public adventureProvider: AdventureProvider) { }


  ionViewDidLoad() {
    this.getAdventures();
  }

  getAdventures() {
    this.adventureProvider.getAdventures().subscribe(
      data => { this.lista = data; console.log(data);},
      erro => console.log(erro)
    );
  }

  details(adventure) {
    this.navCtrl.push(DetailsPage, { adventure });
  }
}
