import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models";
import {Observable} from "rxjs";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class UsersService{

  constructor(private httpClient:HttpClient) { }

  // I use resolve for getting all users (usersResolveService.ts)
  getUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(urls.users);
  }

  getUser(userId: number) : Observable<IUser>{
    return this.httpClient.get<IUser>(urls.users + '/' + userId);
  }
}
