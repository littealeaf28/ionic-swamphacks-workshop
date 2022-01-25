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

}
