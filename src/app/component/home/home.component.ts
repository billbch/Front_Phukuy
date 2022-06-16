import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  verify =true

  ngOnInit(): void {
    this.verify = this.auth()
   /* const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user){
        const uid = user.uid;
        console.log(uid)
      } else {
        console.log("no existe")
      }
    })*/

    this.afAuth.authState.subscribe(user => {
      if (user){
        const uid = user.uid;
        console.log(user)
      } else {
        console.log("no existe")
      }
    })


  }

  auth() {

    if (1) {
      return true;
    } else {
      return false
    }
  }

  show(){
    if(this.verify){

    }else{
      console.log("page not found")
    }
  }

 

}
