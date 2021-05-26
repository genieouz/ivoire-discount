import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCommentGQL } from 'src/generated/graphql';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  message = { content: "", postedBy: "" }
  discussion: any = {};
  constructor(
    private router: Router,
    private readonly createCommentGQL: CreateCommentGQL
  ) { }

  ngOnInit(): void {
    const discussion = localStorage.getItem('discussion');
    if(!discussion) {
      this.router.navigate(['//pages/blog/no/sidebar'])
    }
    this.discussion = JSON.parse(discussion);
  }

  submit() {
    this.createCommentGQL.mutate({ commentInput: { ...this.message, discussionId: this.discussion.id } }).subscribe(
      ({ data }) => {
        const comments = [...this.discussion.comments, data.createComment];
        this.discussion = { ...this.discussion, comments }
        this.message = { content: "", postedBy: "" };
      }
    )
  }
}
