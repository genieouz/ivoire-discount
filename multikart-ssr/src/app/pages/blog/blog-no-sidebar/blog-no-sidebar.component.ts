import { Component, OnInit } from '@angular/core';
import { FetchForumMessagesGQL, CreateForumMessageGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-blog-no-sidebar',
  templateUrl: './blog-no-sidebar.component.html',
  styleUrls: ['./blog-no-sidebar.component.scss']
})
export class BlogNoSidebarComponent implements OnInit {
  message = { content: "", postedBy: "", subject: "" };
  discussions: any = [];
  constructor(
    private readonly fetchForumMessages: FetchForumMessagesGQL,
    private readonly createForumMessage: CreateForumMessageGQL  
  ) {
    this.fetchForumMessages.fetch().subscribe(
      ({ data }) => {
        this.discussions = data.fetchForumMessages;
      }
    )
  }

  ngOnInit(): void {
  }


  submit() {
    this.createForumMessage.mutate({ forumMessageInput: this.message }).subscribe(
      ({ data }) => {
        this.discussions = [...this.discussions, data.createForumMessage];
        this.message = { content: "", postedBy: "", subject: "" };
      }
    )
  }

  selectSubject(discussion) {
    localStorage.setItem('discussion', JSON.stringify(discussion));
  }
}
