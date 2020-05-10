import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  data: any;
  url = environment.apiBase;

  constructor(private http: HttpClient) {
  }

  getAllSections(): Observable<any> {
    return this.http
      .get(this.url + 'api/Section/Get')
      .pipe(catchError(this.handleError));
  }

  getSectionById(QueryId: number): Observable<any> {
    return this.http
      .get(this.url + 'api/Section/Get/id?id=' + QueryId)
      .pipe(catchError(this.handleError));
  }

  SaveSectionDetails(body): Observable<any> {
    return this.http
      .post(this.url + 'api/Section/Post', body, {
        responseType: 'text'
      }).pipe(
        tap(res => {
        })
      );
  }
  UpdateSectionDetails(body): Observable<any> {
    return this.http
      .put(this.url + '/api/Section/Put', body, {
        responseType: 'text'
      }).pipe(
        tap(res => {
        })
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //  client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      //  server-side error
      if (error.status >= 400 && error.status < 500) {
        errorMessage = 'Action failed due to bad request';
      } else if (error.status >= 500) {
        errorMessage = 'Action failed due to server side issue';
      }
    }
    return throwError(errorMessage);
  }
}
