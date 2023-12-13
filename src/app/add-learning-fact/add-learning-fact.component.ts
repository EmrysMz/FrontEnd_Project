// add-learning-fact.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-learning-fact',
  templateUrl: './add-learning-fact.component.html',
  styleUrls: ['./add-learning-fact.component.css']
})
export class AddLearningFactComponent implements OnInit {
  formData = {
    title: '',
    description: '',
    content: '',
    question : '',
    answer : '',
    learningpackageid: 0, // Initialize with a default value
    disable: false
  };

  learningPackages: any[] = []; // Array to store learning packages

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch the list of learning packages
    this.http.get<any[]>('http://localhost:3000/api/package')
      .subscribe(data => {
        this.learningPackages = data;
      });
  }

  submitForm() {
    console.log(this.formData);
    this.http.post(`http://localhost:3000/api/package/${this.formData.learningpackageid}/fact`, this.formData)
      .subscribe(response => {
        console.log('Requête POST réussie', response);
        this.resetForm();
      });
  }

  resetForm() {
    this.formData = {
      title: '',
      description: '',
      content: '',
      question: '',
      answer: '',
      learningpackageid: 0,
      disable: false
    };
  }
}
