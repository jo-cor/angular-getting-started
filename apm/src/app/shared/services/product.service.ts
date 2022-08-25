import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IProduct } from 'src/app/products/product';

@Injectable({ providedIn: 'root' }) //so it can be used anywhere in the app
export class ProductService {
  productUrl: string = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((r) => console.log('All: ', JSON.stringify(r))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    console.log('Err: ', err.message);
    //without this return, I get the error below in the caller to handleError(...)
    //Argument of type '(err: HttpErrorResponse) => void' is not assignable to parameter of type '(err: any, caught: Observable<IProduct[]>) => ObservableInput<any>'.
    //Type 'void' is not assignable to type 'ObservableInput<any>'.
    return throwError(() => 'oh snap!');
  }
}
