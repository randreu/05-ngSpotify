import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {
  private searchUrl:string;


  constructor(private _http:Http){

  }

  searchMusicFunction(str:string, type='artist'){
    //var rootUrl = 'https://api.spotify.com';
    var rootUrl = 'http://localhost:3001';
    this.searchUrl = rootUrl + '/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
    return this._http.get(this.searchUrl)
      .map(res => res.json());
  }
}
