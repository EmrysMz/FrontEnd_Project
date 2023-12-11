import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-facts-physics',
  templateUrl: './facts-physics.component.html',
  styleUrls: ['./facts-physics.component.css']
})
export class FactsPhysicsComponent implements OnInit {
  facts!: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/api/package/3/fact')
        .subscribe( data => {
              console.log(data)
              this.facts = data;
            }
        );
  }
}
