import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** CAMERA IMPORT - CAN MOVE TO SERVICE */
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
// import { Filesystem, Directory } from '@capacitor/filesystem';
// import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public photos: UserPhoto[] = [];

  constructor(private router: Router) { }

  ngOnInit() {}

  addPhotoToGallery() {
    this.addNewToGallery();
  }

  public back() {
    this.router.navigate(['/home']);
  }

  /** CAMERA FUNCTIONALITY - CAN ALSO MOVE INTO A SERVICE */
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}
