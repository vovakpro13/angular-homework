import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IUser} from "../models";
import {HttpClient} from "@angular/common/http";
import {urls} from "../constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<IUser[]>{

  constructor(private httpClient:HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.httpClient.get<IUser[]>(urls.users);
  }
}
