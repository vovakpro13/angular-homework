import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../../../models";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[]

  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.data.subscribe(({data}) => {
      this.users = data
    })
    console.log(this.users)
  }

  ngOnInit(): void {

  }

}
