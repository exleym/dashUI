import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ApiResponse, Account, Tag } from './common/models';
import { ResourceService } from './resource-service-interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'})
};


@Injectable({
  providedIn: 'root'
})
export class AccountService implements ResourceService {
  /*
    AccountService must be injectable anywhere that takes a ResourceService,
    particularly in TagComponent.
   */
  resourceUrl = 'http://localhost:8080/api/v1/accounts';

  constructor(private http: HttpClient) { }

  getResources(): Observable<Account[]> {
    return this.http.get<ApiResponse>(this.resourceUrl, httpOptions).pipe(
      map(res => res.data ),
      catchError(this.handleError('getResources', []))
    );
  }

  searchResource(term: string): Observable<Account[]> {
    return this.http.get<ApiResponse>(this.resourceUrl + `?search=${term}`, httpOptions)
      .pipe(
        map(res => res.data),
        catchError(this.handleError('searchResources', []))
      );
  }

  createResource(resource: Account): Observable<Account> {
    return this.http.post<ApiResponse>(this.resourceUrl, resource, httpOptions).pipe(
      map(res => res.data ),
      catchError(this.handleError('createResource', []))
    );
  }

  updateResource(resource: Account): Observable<Account> {
    return of(resource);
  }

  deleteResource(resource: Account): Observable<Account> {
    return of(resource);
  }

  tagResource(resource: Account, tag: string): Observable<Account> {
    const url = this.resourceUrl + `/${resource.id}/tags`;
    const tagPackage = {name: tag};
    return this.http.post<ApiResponse>(url, tagPackage, httpOptions).pipe(
      map(res => res.data),
      catchError(this.handleError('tagResource', []))
    );
  }

  getResourceTags(resource: Account): Observable<Tag[]> {
    return this.http.get<ApiResponse>(this.resourceUrl + `/${resource.id}/tags`, httpOptions).pipe(
      map(res => res.data),
      catchError(this.handleError('getResourceTags', []))
    );
  }

  untagResource(resource: Account, tag: Tag): Observable<Account> {
    return this.http.delete<ApiResponse>(this.resourceUrl + `/${resource.id}/tags/${tag.id}`).pipe(
      map(res => res.data),
      catchError(this.handleError('untagResource', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
