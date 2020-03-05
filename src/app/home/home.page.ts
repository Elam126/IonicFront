import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  public items: Array<any> = [];

  slideOpts = {
    
    speed: 400,
    effect: 'coverflow',
    slidesPerView: 1,
    slideOffsetBefore: 10,
    slideOffsetAftrer: 10,
    direction: 'vertical',
    centeredSlides: true,
    coverflowEffect: {
      rotate: 20,
      streach: 100,
      depth: 100,
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      modifier: 1,
    }
  };

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.getData();
    
  }

  getData(){
    let url= 'https://madras-daily.herokuapp.com/api/news';
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result =>{
      this.items = result;
      
     // console.log(result);
    });
  }


}
