import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageService } from '../image-detail/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
title = 'Recent Photos';
@Input() filterBy: String = 'all';
visibleImages: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  constructor(private imageService: ImageService) {
  this.visibleImages = this.imageService.getImages();
  }

}
