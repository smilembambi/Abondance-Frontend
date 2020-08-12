import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { CategorieModel } from 'src/app/models/categorie.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories: CategorieModel[] = [];

  constructor(private categorieService: CategorieService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.categorieService.getAll().subscribe(
      (data: CategorieModel[])=>{
        
        if(data){
          this.categories = data;
        }
      }
    );
  }


  getCategorie(id: number){
   // this.router.navigate(['/categorie', id], { relativeTo: this.activatedRoute });
   // this.router.navigateByUrl('categorie/'+id);
    this.router.navigate(['/categorie/'+id]);
  }

  getNav(nav: string){
    this.router.navigate([nav]);
  }

}
