 import { Component, OnInit } from '@angular/core';
 import {User} from "../../../models";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public uiBasicCollapsed = false;
  public samplePagesCollapsed = false;
  userNom: string = "";
  role: string = "";
  
  constructor() { }

  ngOnInit() {
    const body = document.querySelector('body');
    let dataUser =  JSON.parse(localStorage.getItem("currentUser"));
    this.userNom = dataUser.data['prenom'] + " " + dataUser.data['nom'];

    if(dataUser.data['roles'] == '[ROLE_USER]'){
      this.role = "operateur";
    }else{
      this.role = "utilisateur";
    }

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}
