import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http, Response } from '@angular/http'; 

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = HomePage;



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private http: Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  cityName = ""
  searchCity(){
    // this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.cityName + "&appid=d8731710a36674515c907d1a5d0d4a07")
     this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=d8731710a36674515c907d1a5d0d4a07")

    .subscribe(
    (res: Response) => {
    const weatherCity = res.json(); 
    console.log(weatherCity);
        
      }
    )
  }
}

