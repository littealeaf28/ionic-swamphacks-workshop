import { Component } from '@angular/core';

/** CAMERA IMPORT - CAN MOVE TO SERVICE */
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
// import { Filesystem, Directory } from '@capacitor/filesystem';
// import { Storage } from '@capacitor/storage';

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
    },
    { 
      title: "Cute Panda 2",
      author: "Panda Man Jr.",
      imgSrc: "assets/panda.jpg",
      text: "Pandas are great again!"
    }
  ]

  constructor() {}

  public deletePost(targetPost) {
    console.log("deleted post",targetPost);

    // simply remove from array
    this.blogEntries = this.blogEntries.filter((post) => {
      return post !== targetPost;
    });
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


  /** CAMERA FUNCTIONALITY - CAN ALSO MOVE INTO A SERVICE */
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }
}
