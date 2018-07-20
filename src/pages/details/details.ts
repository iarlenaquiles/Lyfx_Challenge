import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  @ViewChild('map') mapRef: ElementRef;
  map: any;
  private details: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.details = navParams.get('adventure');
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(this.details.location.coordinates[0], this.details.location.coordinates[1]);

    const options = {
      center: location,
      zoom: 10
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }
}
