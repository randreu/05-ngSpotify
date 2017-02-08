import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {
  //private rootUrl = 'https://api.spotify.com';
  private rootUrl = 'http://localhost:3001';

  private searchUrl:string;
  private artistUrl:string;
  private albumsUrl:string;
  private albumUrl:string;

  constructor(private _http:Http){

  }

  searchMusicFunction(str:string, type='artist'){
    this.searchUrl = this.rootUrl + '/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
    return this._http.get(this.searchUrl)
      .map(res => res.json());
  }

  getArtist(id: string) {
    this.artistUrl = this.rootUrl + '/v1/artists/' + id;
    return this._http.get(this.artistUrl)
      .map(res => res.json());
  }

  getAlbums(artistId:string){
    this.albumsUrl = this.rootUrl + '/v1/artists/' + artistId + '/albums';
    return this._http.get(this.albumsUrl)
      .map(res => res.json());
  }

  getAlbum(albumId:string){
    this.albumUrl = this.rootUrl + '/v1/albums/' + albumId ;
    return this._http.get(this.albumUrl)
      .map(res => res.json());
  }
}
