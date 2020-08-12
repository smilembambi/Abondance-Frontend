import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer-site',
  templateUrl: './footer-site.component.html',
  styleUrls: ['./footer-site.component.scss']
})
export class FooterSiteComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }


  getNav(nav: string){
    this.router.navigate([nav]);
  }

}
