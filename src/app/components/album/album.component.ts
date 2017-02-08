import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Album} from '../../../Album';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  moduleId:module.id,
  selector: 'album',
  templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit {

  id:string;
  album:Album

  constructor(
    private _spotifyService:SpotifyService,
    private _route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this._route.params
      .map(params => params['id'])
      .subscribe(id => {
        this._spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          });

      });
  }

}
