// delete-learning-package.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-learning-package',
  templateUrl: './delete-learning-package.component.html',
  styleUrls: ['./delete-learning-package.component.css']
})
export class DeleteLearningPackageComponent implements OnInit {
  deleteFormData = {
    learningpackageid: undefined,
  };

  packages: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Charger la liste des packages pour la sélection dans le dropdown
    this.http.get<any[]>('http://localhost:3000/api/package')
        .subscribe(data => {
          this.packages = data;
        });
  }

  onDelete() {
    if (this.deleteFormData.learningpackageid !== undefined) {
      // Effectuer la suppression en utilisant l'ID sélectionné
      this.http.delete(`http://localhost:3000/api/package/${this.deleteFormData.learningpackageid}`)
          .subscribe(response => {
            console.log(response);
            // Mettre à jour ou afficher des messages à l'utilisateur
          });
    } else {
      console.error('Package ID is undefined.');
      // Gérer le cas où l'ID du package est indéfini
    }
  }
}
