import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
