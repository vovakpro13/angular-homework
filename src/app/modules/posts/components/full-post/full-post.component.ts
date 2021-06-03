import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService, UsersService} from "../../../../services";
import {IPost, IUser} from "../../../../models";

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {

  singlePost: IPost;
  author: IUser;

  constructor(private postsService:PostsService, private activatedRoute:ActivatedRoute, private usersService:UsersService) {
    this.activatedRoute.params.subscribe(({postId}) =>{

      this.postsService.getPost(postId).subscribe(post =>{

        this.singlePost = post;

        this.usersService.getUser(post.userId).subscribe(user =>{
          this.author = user;
        })

      })
    })

  }

  ngOnInit(): void {

  }

}
