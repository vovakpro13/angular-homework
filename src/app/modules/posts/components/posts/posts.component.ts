import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../../../services";
import {IPost} from "../../../../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];

  constructor(private postsService:PostsService) {
    this.postsService.getPosts().subscribe((posts) =>{
      this.posts = posts;
    });

  }

  ngOnInit(): void {}

}
