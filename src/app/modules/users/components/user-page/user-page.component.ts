import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../../models";
import {UsersService} from "../../../../services";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  singleUser: IUser

  constructor(private activatedRoute:ActivatedRoute,
              private usersService:UsersService,
              private router:Router) {
    this.activatedRoute.params.subscribe(({id}) =>{
      this.usersService.getUser(id).subscribe((user) => {
        this.singleUser = user as IUser;
      })
    })
  }

  ngOnInit(): void {
  }

  navigateToUsers(): void{
    this.activatedRoute.parent?.url.subscribe(urlPath => {
      this.router.navigateByUrl(urlPath[0].path)
    });
  }
}
