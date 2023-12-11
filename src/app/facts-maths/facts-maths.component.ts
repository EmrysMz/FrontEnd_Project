import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-facts-maths',
  templateUrl: './facts-maths.component.html',
  styleUrls: ['./facts-maths.component.css']
})
export class FactsMathsComponent implements OnInit {
  facts!: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/api/package/1/fact')
        .subscribe( data => {
          console.log(data)
          this.facts = data;
        }
    );
  }
}
