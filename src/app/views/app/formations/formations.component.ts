import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { CategorieModel } from 'src/app/models/categorie.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormationService } from 'src/app/core/services/formation.service';
import { FormationModel } from 'src/app/models/formation.model';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  categories: CategorieModel[] = [];

  constructor(private categorieService: CategorieService,
    private formationService: FormationService,
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


  getNombreFormation(id: number){

    this.formationService.getByCategorie(id).subscribe(
      (data: FormationModel[])=>{
        if(data){
          
        }
      }
    )

  }


  /**
   * 
   */
  getFormation(id: number){
    this.router.navigate(['/categorie/'+id]);
  }

}
