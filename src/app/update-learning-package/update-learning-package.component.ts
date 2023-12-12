import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-update-learning-package',
  templateUrl: './update-learning-package.component.html',
  styleUrls: ['./update-learning-package.component.css']
})
export class UpdateLearningPackageComponent implements OnInit {
  updateFormData = {
    learningpackageid: 0,
    title: '',
    description: '',
    category: '',
    targetaudience: '',
    difficulty: 0
  };
  packages: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchPackages();
  }

  fetchPackages() {
    this.http.get<any[]>('http://localhost:3000/api/package')
        .subscribe(data => {
          this.packages = data;
        });
  }

  updatePackage() {
    // Implement the logic to send the PUT request to update the package
    console.log(this.updateFormData)

    this.http.put('http://localhost:3000/api/package', this.updateFormData)
        .subscribe(response => {
          console.log('Package updated successfully', response);

          this.resetForm();

        });
  }

  resetForm() {
    this.updateFormData = {
      learningpackageid: 0,
      title: '',
      description: '',
      category: '',
      targetaudience: '',
      difficulty: 0
    };
  }
}
