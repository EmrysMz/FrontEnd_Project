import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-facts-computer-science',
  templateUrl: './facts-computer-science.component.html',
  styleUrls: ['./facts-computer-science.component.css']
})
export class FactsComputerScienceComponent implements OnInit {
  facts!: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/api/package/4/fact')
        .subscribe( data => {
              console.log(data)
              this.facts = data;
            }
        );
  }
}
