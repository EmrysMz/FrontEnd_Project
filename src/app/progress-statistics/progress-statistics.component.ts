// progress-statistics.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-progress-statistics',
  templateUrl: './progress-statistics.component.html',
  styleUrls: ['./progress-statistics.component.css'],
})
export class ProgressStatisticsComponent implements OnInit {
  userId: string | null;
  userName: string | null;

  userPackages: any[] = [];
  constructor(private userAuthService: UserAuthService, private http: HttpClient) {
    this.userId = userAuthService.getUserId();
    this.userName = userAuthService.getUserName();
  }

  ngOnInit() {
    this.fetchUserPackages();
  }

  fetchUserPackages() {
    this.http.get<any[]>(`http://localhost:3000/api/user-packages/${this.userId}`)
        .subscribe((packages) => {
          this.userPackages = packages;
          console.log("User packages :",this.userPackages)

          // Fetch Learning Facts for each Learning Package
          this.userPackages.forEach((userPackage: any) => {
            this.fetchLearningFacts(userPackage.LearningPackageTable.learningpackageid);

          });
        });
  }

  fetchLearningFacts(learningPackageId: number) {
    this.http.get<any[]>(`http://localhost:3000/api/learning-facts/${this.userId}/${learningPackageId}`)
        .subscribe((learningFacts) => {
          console.log("userid :",this.userId)
          console.log("learningpackageid ;",learningPackageId)
          console.log(learningFacts)
          // Assign the fetched Learning Facts to the corresponding Learning Package
          const userPackage = this.userPackages.find((pkg) => pkg.LearningPackageTable.learningpackageid === learningPackageId);
          if (userPackage) {
            userPackage.UserLearningFactTables = learningFacts;
          }
        });
  }
}
