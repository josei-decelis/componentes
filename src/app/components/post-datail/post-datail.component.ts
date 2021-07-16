import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-datail',
  templateUrl: './post-datail.component.html',
  styleUrls: ['./post-datail.component.scss']
})
export class PostDatailComponent implements OnInit {

  post: any;

  constructor(private router: Router, private activateRouted: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.activateRouted.params.subscribe(params => {
      console.log('pPostDetailComponents: id ', params['id']);
      const id = params['id'];

      this.postService.getPostsById(id).subscribe((resp) => {
        this.post= resp;
        console.log(this.post);
      })

    });

  }

}
