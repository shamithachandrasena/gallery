import { Injectable } from '@angular/core';
const IMAGES = [
  {'id': 1, 'category': 'boats', 'caption': 'View from a boat', 'url': 'assets/img/img_01.png'},
  {'id': 2, 'category': 'boats', 'caption': 'View from a boat', 'url': 'assets/img/img_02.jpg'},
  {'id': 3, 'category': 'boats', 'caption': 'View from a boat', 'url': 'assets/img/img_03.jpg'}
];

@Injectable()
export class ImageService {
  visibleImages = [];
getImages() {
  return this.visibleImages = IMAGES.slice(0);
}
getImage(id: number) {
  return IMAGES.slice(0).find( image => image.id === id);
}
  constructor() { }

}
