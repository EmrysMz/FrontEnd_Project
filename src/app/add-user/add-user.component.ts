// add-user.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  formData = {
    name: '',
  };

  constructor(private http: HttpClient) {}

    submitForm() {
        console.log(this.formData);
        this.http.post('http://localhost:3000/api/users', this.formData)
            .subscribe(
                (response) => {
                    console.log('User added successfully', response);
                    this.resetForm();
                }
            );
    }


    resetForm() {
        this.formData = {
            name: '',
        };
    }
}
