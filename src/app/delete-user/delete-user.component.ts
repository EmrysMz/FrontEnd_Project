// delete-user.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  users: any[] = [];
  deleteFormData = {
    userid: undefined,
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Charger la liste des utilisateurs pour la sélection dans le dropdown
    this.http.get<any[]>('http://localhost:3000/api/users')
        .subscribe(data => {
          this.users = data;
        });
  }

  onDelete() {
    if (this.deleteFormData.userid !== undefined) {
      // Effectuer la suppression en utilisant l'ID sélectionné
      this.http.delete(`http://localhost:3000/api/users/${this.deleteFormData.userid}`)
          .subscribe(response => {
            console.log(response);
            // Mettre à jour ou afficher des messages à l'utilisateur
          });
    } else {
      console.error('UserID is undefined.');
      // Gérer le cas où l'ID de l'utilisateur est indéfini
    }
  }
}
