import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import { LessonListPageComponent } from './lesson-list-page/lesson-list-page.component';
import { LessonDetailPageComponent } from './lesson-detail-page/lesson-detail-page.component';
import { TestPage1Component } from './test-page1/test-page1.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NumberDisplayComponent } from './number-display/number-display.component';
import { NumberStepsComponent } from './number-steps/number-steps.component';
import { NumberEditComponent } from './number-edit/number-edit.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from "@angular/common/http";
import { ConnectionPageComponent } from './connection-page/connection-page.component';
import { UserAuthService } from './user-auth.service';
import {UserSettingsService} from "./user-settings.service";
import { UserPageComponent } from './user-page/user-page.component';
import { FactsMathsComponent } from './facts-maths/facts-maths.component';
import { FactsEnglishComponent } from './facts-english/facts-english.component';
import { FactsPhysicsComponent } from './facts-physics/facts-physics.component';
import { FactsComputerScienceComponent } from './facts-computer-science/facts-computer-science.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddLearningPackageComponent } from './add-learning-package/add-learning-package.component';


@NgModule({
  declarations: [
    AppComponent,
    LessonEditFormComponent,
    LessonSearchPageComponent,
    MenuNavBarComponent,
    LessonListPageComponent,
    LessonDetailPageComponent,
    TestPage1Component,
    NumberDisplayComponent,
    NumberStepsComponent,
    NumberEditComponent,
    HomePageComponent,
    ConnectionPageComponent,
    UserPageComponent,
    FactsMathsComponent,
    FactsEnglishComponent,
    FactsPhysicsComponent,
    FactsComputerScienceComponent,
    AdminNavbarComponent,
    AddLearningPackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }