import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user={
    email:"",
    password:"",
    password2:""
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private AuthService:AuthProvider,
    private toastCtrl:ToastController,
     private menuCtrl:MenuController
  ) {
    menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(){
    if(this.user.password===this.user.password2){
      this.AuthService.register(this.user.email,this.user.password)
      .then(()=>{
        if(this.AuthService.isRegisterSuccess){
          this.AuthService.isRegisterSuccess=false;
          this.navCtrl.pop();
          this.presentToast("Nieuwe gebruiker is aangemaakt");
        }
      });
    }else{
      this.presentToast("Passwords need to be identical.");
    }
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