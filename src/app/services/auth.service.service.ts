import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class Login {

  constructor(private auth:AngularFireAuth) { }

  async login(email:string,password:string) {
    try{
      return await this.auth.signInWithEmailAndPassword(email,password).then(res=>{
        const a=res.user?.uid || 'null'
        localStorage.setItem('UID',a);
      });
      
    } catch (err) {
      console.log("error de auth",err);
      return null;
    }
  }

  async authnavigate(email:string,password:string,route:string){
    try{
      return await this.auth.signInWithEmailAndPassword(email,password).then(res=>{
        const a=res.user?.uid || 'null'
        localStorage.setItem('UID',a);
        
      });
      
    } catch (err) {
      console.log("error de auth",err);
      return null;
    }
  }
}
