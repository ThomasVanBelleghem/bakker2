import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {FireDataServiceProvider} from '../../providers/fire-data-service/fire-data-service'
import { Observable } from 'rxjs/Observable';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  product:any;

  fotos: Observable<any[]>;
 avatarData="";
 user : any;

  readonly options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetHeight:250,
    targetWidth:500
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera:Camera,
    private db : FireDataServiceProvider,  private toastCtrl:ToastController, public authService: AuthProvider,) {

     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');

    this.fotos =this.db.getFoto(this.authService.getLoggedUID());
    this.fotos.subscribe((result) => {
      console.log("got this data from provider", result);
    }, (error) => {
      console.log("Didn't get any data", error);
    })
   
    this.user = this.authService.afAuth.auth.currentUser.email;

    

  }
  takePicture() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      
      let foto ={
        imageData:base64Image
      }

      this.db.update(this.authService.getLoggedUID(),foto);
    }, (err) => {
      // Handle error
    });
  }
  

  newPass(Password:string){
    var user = this.authService.afAuth.auth.currentUser;
    user.updatePassword(Password).then(function(){
      console.log("succes");
      this.presentToast("test");
    }).catch(function(error){
      console.log("error");
    })
  }
  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast', message);
    });

    toast.present();
  }
  


  
}
