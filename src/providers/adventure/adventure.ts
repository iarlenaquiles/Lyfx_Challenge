import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utils } from '../../Utils/Utils';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdventureProvider {

  private url: string;

  constructor(public http: HttpClient) {
    this.url = Utils.getUrlBackend();
  }

  public getAdventures(): Observable<any>{
    return this.http.get(this.url);
  }

}
