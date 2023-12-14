// study-now.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthService } from '../user-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-study-now',
  templateUrl: './study-now.component.html',
  styleUrls: ['./study-now.component.css'],
})
export class StudyNowComponent implements OnInit {
  userId: string | null;
  userName: string | null;

  userPackages: any[] = [];
  constructor(private userAuthService: UserAuthService, private http: HttpClient,private router: Router) {
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

        // Fetch Learning Facts for each Learning Package
        this.userPackages.forEach((userPackage: any) => {
          this.fetchLearningFacts(userPackage.LearningPackageTable.learningpackageid);
        });
      });
  }

  fetchLearningFacts(learningPackageId: number) {
    this.http.get<any[]>(`http://localhost:3000/api/learning-facts/${this.userId}/${learningPackageId}`)
      .subscribe((learningFacts) => {
        // Assign the fetched Learning Facts to the corresponding Learning Package
        const userPackage = this.userPackages.find((pkg) => pkg.LearningPackageTable.learningpackageid === learningPackageId);
        if (userPackage) {
          userPackage.UserLearningFactTables = learningFacts;
        }
      });
  }

  calculateDate(lastReviewedDate: string, confidenceLevel: number): Date {
    // Add confidenceLevel days to lastReviewedDate
    const date = new Date(lastReviewedDate);
    date.setDate(date.getDate() + confidenceLevel);
    return date;
  }

  navigateToFact(fact:any) {
    // Handle navigation logic
    this.router.navigate(['/user-learning', fact.learningfactid]);


  }
}
