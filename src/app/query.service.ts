import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  data: any;
  url = environment.apiBase;

  constructor(private http: HttpClient) {
  }

  getQueries(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0YWRpdmFrYTEyM0BnbWFpbC5jb20iLCJqdGkiOiJjMGRlYWMwNi01NTE4LTRhMzctYmI0Ni05NzlhNDNjNjljOTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImJlMTBlMWNiLWRjMzktNDI3ZC04NGIxLWMyYzVmZmNmM2U4NiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdXNlcmRhdGEiOiJUQURJVkFLQTEyM0BHTUFJTC5DT00gVEFESVZBS0ExMjNAR01BSUwuQ09NIiwiZXhwIjoxNTkxNzA5NDQ1LCJpc3MiOiJodHRwczovL1FMaWJyYXJ5QXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6Imh0dHBzOi8vUUxpYnJhcnlBcGkuYXp1cmV3ZWJzaXRlcy5uZXQvIn0.p4EfkbaIXDD61hB14lv1bUHZ5vNla6xmaqnq6k7Vw3Q"
    })

    return this.http
      .get(this.url + 'api/Query/Get', { headers: headers })
      .pipe(catchError(this.handleError));
  }

  getQueryById(QueryId: number): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0YWRpdmFrYTEyM0BnbWFpbC5jb20iLCJqdGkiOiJjMGRlYWMwNi01NTE4LTRhMzctYmI0Ni05NzlhNDNjNjljOTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImJlMTBlMWNiLWRjMzktNDI3ZC04NGIxLWMyYzVmZmNmM2U4NiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdXNlcmRhdGEiOiJUQURJVkFLQTEyM0BHTUFJTC5DT00gVEFESVZBS0ExMjNAR01BSUwuQ09NIiwiZXhwIjoxNTkxNzA5NDQ1LCJpc3MiOiJodHRwczovL1FMaWJyYXJ5QXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6Imh0dHBzOi8vUUxpYnJhcnlBcGkuYXp1cmV3ZWJzaXRlcy5uZXQvIn0.p4EfkbaIXDD61hB14lv1bUHZ5vNla6xmaqnq6k7Vw3Q"
    })

    return this.http
      .get(this.url + 'api/Query/Get/id?id=' + QueryId, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  DeleteQuery(QueryId: number): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0YWRpdmFrYTEyM0BnbWFpbC5jb20iLCJqdGkiOiJjMGRlYWMwNi01NTE4LTRhMzctYmI0Ni05NzlhNDNjNjljOTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImJlMTBlMWNiLWRjMzktNDI3ZC04NGIxLWMyYzVmZmNmM2U4NiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdXNlcmRhdGEiOiJUQURJVkFLQTEyM0BHTUFJTC5DT00gVEFESVZBS0ExMjNAR01BSUwuQ09NIiwiZXhwIjoxNTkxNzA5NDQ1LCJpc3MiOiJodHRwczovL1FMaWJyYXJ5QXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6Imh0dHBzOi8vUUxpYnJhcnlBcGkuYXp1cmV3ZWJzaXRlcy5uZXQvIn0.p4EfkbaIXDD61hB14lv1bUHZ5vNla6xmaqnq6k7Vw3Q"
    })

    return this.http
      .delete(this.url + 'api/Query/Delete?id=' + QueryId, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  SaveQueryDetails(body): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0YWRpdmFrYTEyM0BnbWFpbC5jb20iLCJqdGkiOiJjMGRlYWMwNi01NTE4LTRhMzctYmI0Ni05NzlhNDNjNjljOTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImJlMTBlMWNiLWRjMzktNDI3ZC04NGIxLWMyYzVmZmNmM2U4NiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdXNlcmRhdGEiOiJUQURJVkFLQTEyM0BHTUFJTC5DT00gVEFESVZBS0ExMjNAR01BSUwuQ09NIiwiZXhwIjoxNTkxNzA5NDQ1LCJpc3MiOiJodHRwczovL1FMaWJyYXJ5QXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6Imh0dHBzOi8vUUxpYnJhcnlBcGkuYXp1cmV3ZWJzaXRlcy5uZXQvIn0.p4EfkbaIXDD61hB14lv1bUHZ5vNla6xmaqnq6k7Vw3Q"
    })

    return this.http
      .post(this.url + 'api/Query/Post', body, {
        responseType: 'text',
        headers: headers
      }).pipe(
        tap(res => {
        })
      );
  }
  UpdateQueryDetails(body): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0YWRpdmFrYTEyM0BnbWFpbC5jb20iLCJqdGkiOiJjMGRlYWMwNi01NTE4LTRhMzctYmI0Ni05NzlhNDNjNjljOTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImJlMTBlMWNiLWRjMzktNDI3ZC04NGIxLWMyYzVmZmNmM2U4NiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdXNlcmRhdGEiOiJUQURJVkFLQTEyM0BHTUFJTC5DT00gVEFESVZBS0ExMjNAR01BSUwuQ09NIiwiZXhwIjoxNTkxNzA5NDQ1LCJpc3MiOiJodHRwczovL1FMaWJyYXJ5QXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6Imh0dHBzOi8vUUxpYnJhcnlBcGkuYXp1cmV3ZWJzaXRlcy5uZXQvIn0.p4EfkbaIXDD61hB14lv1bUHZ5vNla6xmaqnq6k7Vw3Q"
    })

    return this.http
      .put(this.url + '/api/Query/Put', body, {
        responseType: 'text',
        headers: headers
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
