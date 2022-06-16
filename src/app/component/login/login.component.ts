import { IMPLICIT_REFERENCE } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Login } from 'src/app/services/auth.service.service';
import { Create } from 'src/app/services/create.user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Create: Create,private authService: Login, private router: Router) { }
  
  ngOnInit(): void {
  }

  usuario = {
    email: '',
    password: ''
  }

  Ingresar() {
    const { email, password } = this.usuario;
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
    this.authService.login(email, password).then(res => {

      const uid = localStorage.getItem('UID');
      if (uid != null) {
        console.log("no null", uid);
        this.router.navigate(['/home']);
        
      }
      else {
        console.log("null", uid)
      }
    })
  }

  Crear(){
    const { email, password } = this.usuario;
    this.Create.create(email,password)
  }
}

