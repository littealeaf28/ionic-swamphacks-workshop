import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  blogEntries: any[] = [
    { 
      title: "Cute Panda",
      author: "Panda Man",
      imgSrc: "assets/panda.jpg",
      text: "Pandas are great"
    },
    { 
      title: "Cute Panda 2",
      author: "Panda Man Jr.",
      imgSrc: "assets/panda.jpg",
      text: "Pandas are great again!"
    }
  ]

  constructor() {}

  public deletePost(post) {
    console.log("deleted post",post);

    // simply remove from array

  }

  public openPost() {
    console.log("opened post");

    // can implement on your own
    // navigate to another page to read the post in more detail
  }

  public addPost() {
    console.log("add new post");

    // navigate to another page
  }
}
