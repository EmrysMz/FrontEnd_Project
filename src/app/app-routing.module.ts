import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LessonEditFormComponent} from "./lesson-edit-form/lesson-edit-form.component";
import {LessonListPageComponent} from "./lesson-list-page/lesson-list-page.component";
import {LessonDetailPageComponent} from "./lesson-detail-page/lesson-detail-page.component";
import{TestPage1Component} from "./test-page1/test-page1.component";
import{HomePageComponent} from "./home-page/home-page.component";
import{ConnectionPageComponent} from "./connection-page/connection-page.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {FactsMathsComponent} from "./facts-maths/facts-maths.component";
import {FactsEnglishComponent} from "./facts-english/facts-english.component";
import {FactsPhysicsComponent} from "./facts-physics/facts-physics.component";
import {FactsComputerScienceComponent} from "./facts-computer-science/facts-computer-science.component";
import {AddLearningPackageComponent} from "./add-learning-package/add-learning-package.component";


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path:'connection-page', component: ConnectionPageComponent},
  { path: 'lesson-edit-form', component: LessonEditFormComponent },
  { path: 'lesson-list', component: LessonListPageComponent },
  { path: 'lesson/:id', component: LessonDetailPageComponent },
  { path: 'test-page1', component: TestPage1Component },
  { path : 'user-page',component : UserPageComponent},
  {path : 'facts-maths',component: FactsMathsComponent},
  {path : 'facts-english',component:FactsEnglishComponent},
  {path : 'facts-physics', component:FactsPhysicsComponent},
  {path : 'facts-computer_science',component: FactsComputerScienceComponent},
  {path: 'add-learning-package',component: AddLearningPackageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
