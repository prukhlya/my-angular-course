import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})

export class AlbumCardComponent implements OnInit {
  @Input()
    album: Album;
  constructor() { }

  @Output()
    albumClicked: EventEmitter<Album> = new EventEmitter<Album>();

  showAlbum() {
        this.albumClicked.emit(this.album);
  }

  ngOnInit() {
  }

}
