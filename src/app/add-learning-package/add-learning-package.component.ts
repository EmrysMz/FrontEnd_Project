import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-learning-package',
  templateUrl: './add-learning-package.component.html',
  styleUrls: ['./add-learning-package.component.css']
})
export class AddLearningPackageComponent {
  formData = {
    title: '',
    description: '',
    category: '',
    targetaudience: '',
    difficulty: 0
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    console.log(this.formData)
    this.http.post('http://localhost:3000/api/package/', this.formData)
        .subscribe(response => {
          console.log('Requête POST réussie', response);
          this.resetForm();
        }, );
  }

  resetForm() {
    this.formData = {
      title: '',
      description: '',
      category: '',
      targetaudience: '',
      difficulty: 0
    };
  }
}
