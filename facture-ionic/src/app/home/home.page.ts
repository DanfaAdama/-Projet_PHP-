import { Component, OnInit } from '@angular/core';
import {  LoadingController, ToastController, NavController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  factures: any;

  constructor(public api: RestApiService, public loadingController: LoadingController) {   this.getFacture(); }

  ionViewDidLoad() {
  this.getFacture();
  }


  getFacture() {
    
    this.api.getFacture().subscribe(data => {
    console.log(data);
    this.factures = data;
   }, error => {
     
    });
  }


}
