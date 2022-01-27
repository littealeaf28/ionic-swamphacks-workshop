import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {}

  addPhotoToGallery() {
    this.addNewToGallery();
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
