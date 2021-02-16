import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MovieModel} from '../models/movie-model';
import {addParseSpanInfo} from '@angular/compiler-cli/src/ngtsc/typecheck/src/diagnostics';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private api = {
    baseUrl: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com',
    headers: new HttpHeaders()
      .set('x-rapidapi-key', '7112a09c47msh583afb55eb69b63p12b12ejsn4068a7d05206')
      .set('x-rapidapi-host', 'imdb-internet-movie-database-unofficial.p.rapidapi.com')
  };

  constructor(private http: HttpClient) {
  }

  searchMovie(title: string): Observable<any> {
    const headers = this.api.headers;
    return this.http.get<MovieModel>(`${this.api.baseUrl}/search/${title}`, {headers});
  }

  getMovie(id: string): Observable<MovieModel> {
    const headers = this.api.headers;
    return this.http.get<MovieModel>(`${this.api.baseUrl}/film/${id}`, {headers});
  }
}
