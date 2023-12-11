import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-facts-english',
  templateUrl: './facts-english.component.html',
  styleUrls: ['./facts-english.component.css']
})
export class FactsEnglishComponent implements OnInit {
  facts!: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/api/package/2/fact')
        .subscribe( data => {
              console.log(data)
              this.facts = data;
            }
        );
  }
}
