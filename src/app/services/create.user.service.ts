import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class Create {

  constructor(private auth:AngularFireAuth) { }

  async create(email:string,password:string) {
    try{
      return await this.auth.createUserWithEmailAndPassword(email,password).then(res=>{
        console.log("user create:", email," ",password)
      });
      
    } catch (err) {
      console.log("error al crear usuario",err);
      return null;
    }
  }
}
