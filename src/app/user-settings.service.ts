import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  lastLessonId : number | null = null;
  private userSelected: boolean = false;




  constructor() { }

  onUserSelected(): void {
    this.userSelected = true;
  }

  isUserSelected(): boolean {
    return this.userSelected;
  }



}
