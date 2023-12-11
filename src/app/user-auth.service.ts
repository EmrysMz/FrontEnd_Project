import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private userId: string | null;
  private userName: string | null;

  constructor() {
    this.userId = null;
    this.userName = null;
  }

  setUserId(userId: string): void {
    console.log('set usr:', userId);
    this.userId = userId;
  }
  setUserName(userName: string): void {
    console.log('set name:', userName);
    this.userName = userName;
  }

  getUserId(): string | null {
    console.log('get id:', this.userId);
    return this.userId;
  }

  getUserName(): string | null {
    console.log('get name:', this.userName);
    return this.userName;
  }

  getIsAdmin(): boolean {
    console.log("admin ? :",this.userId)
    console.log("admin ? :",this.userName)
    console.log("test : ",this.userId === '100')
    return this.userId == '100';
  }



}
