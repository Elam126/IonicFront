import { Component } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import {Platform} from '@ionic/angular';
import {NavController} from '@ionic/angular';
//import { Observable } from 'rxjs/Rx';
//import { resolve } from 'url';
import 'rxjs/add/operator/map';
import { Items } from './home';
//import { HTTP } from '@ionic-native/http/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  //public items: any[] = [];
  items: Items []= [];

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

  constructor(public navCtrl: NavController, private http: Http, public platform:Platform) {
  // this.getData();

//    this.http.get('https://madras-daily.herokuapp.com/api/news').map(res => res.json()).subscribe(data=>{this.items=data;})
    this.http.get('https://madras-daily.herokuapp.com/api/news'). map(res => res.json()).subscribe(data => {
      this.items = data.data;

      console.log(data);
    },
    err => {
      console.log("Oops!")
    });

    
    
    
  }
/*
  getData(){
    let url= 'https://madras-daily.herokuapp.com/api/news';
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result =>{
      this.items = result;
      
 
     // console.log(result);
    });
  }
*/

}
