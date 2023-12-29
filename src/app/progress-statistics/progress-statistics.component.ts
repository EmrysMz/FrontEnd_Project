import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthService } from '../user-auth.service';
import * as Highcharts from 'highcharts';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-progress-statistics',
    templateUrl: './progress-statistics.component.html',
    styleUrls: ['./progress-statistics.component.css'],
})
export class ProgressStatisticsComponent implements OnInit {
    userId: string | null;
    userName: string | null;

    userPackages: any[] = [];

    Highcharts: typeof Highcharts = Highcharts;

    constructor(private userAuthService: UserAuthService, private http: HttpClient) {
        this.userId = userAuthService.getUserId();
        this.userName = userAuthService.getUserName();
    }

    ngOnInit() {
        this.fetchUserPackages();
    }

    fetchUserPackages() {
        this.http.get<any[]>(`http://localhost:3000/api/user-packages/${this.userId}`).subscribe((packages) => {
            this.userPackages = packages;
            console.log("User packages :", this.userPackages);

            // Fetch Learning Facts for each Learning Package
            const fetchObservables = this.userPackages.map((userPackage: any) => {
                return this.fetchLearningFacts(userPackage.LearningPackageTable.learningpackageid).pipe(
                    tap((learningFacts) => {
                        userPackage.UserLearningFactTables = learningFacts; // Ajout de l'attribution des données à userPackage.UserLearningFactTables
                        userPackage.chartOptions = this.getChartOptions(learningFacts);
                    })
                );
            });

            forkJoin(fetchObservables).subscribe(() => {
                console.log("All learning facts fetched");
            });
        });
    }

    fetchLearningFacts(learningPackageId: number) {
        return this.http.get<any[]>(`http://localhost:3000/api/learning-facts/${this.userId}/${learningPackageId}`).pipe(
            tap((learningFacts) => {
                console.log("userid :", this.userId);
                console.log("learningpackageid :", learningPackageId);
                console.log(learningFacts);
            })
        );
    }

    getChartOptions(learningFacts: any[]): Highcharts.Options {
        const categories = learningFacts.map((fact: any) => fact.LearningFactTable.title);
        const data = learningFacts.map((fact: any) => fact.timesreviewed);
        console.log('categories : ', categories);
        console.log('data : ', data);

        return {
            chart: {
                type: 'column',
            },
            title: {
                text: 'Learning Fact Review Statistics',
            },
            xAxis: {
                categories: categories,
            },
            yAxis: {
                title: {
                    text: 'Number of Times Reviewed',
                },
            },
            series: [
                {
                    type: 'column',
                    name: 'Times Reviewed',
                    data: data,
                },
            ],
        };
    }
}
