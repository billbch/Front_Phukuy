import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


//firebase
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { LandingComponent } from './component/landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { BodyComponent } from './component/body/body.component';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { ListPaientientsComponent } from './component/list-paientients/list-paientients.component';
import { ControlPaientientsComponent } from './component/control-paientients/control-paientients.component';
import { ExamansControlsComponent } from './component/examans-controls/examans-controls.component';



const firebaseConfig = {
  apiKey: "AIzaSyD3i2JSxBpGnAOoKZSWqd23zUEcqkRxjOg",
  authDomain: "phukuy-611b6.firebaseapp.com",
  databaseURL: "https://phukuy-611b6-default-rtdb.firebaseio.com",
  projectId: "phukuy-611b6",
  storageBucket: "phukuy-611b6.appspot.com",
  messagingSenderId: "637949476645",
  appId: "1:637949476645:web:89be52c33f3948e5ade4cc",
  measurementId: "G-8HCC96G9LF"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LandingComponent,
    BodyComponent,
    SidenavComponent,
    ListPaientientsComponent,
    ControlPaientientsComponent,
    ExamansControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    RouterModule,
    AppRoutingModule,
    CommonModule

  ],
  providers: [
    AngularFireDatabase,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
