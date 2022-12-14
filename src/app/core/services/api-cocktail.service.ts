import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cocktail} from "../interfaces/cocktail.interface";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ApiCocktailService {
  private readonly baseUrl: string

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  getCocktails(): Observable<Cocktail[]> {
    const url = `${this.baseUrl}/cocktails`;

    return this.http.get<Cocktail[]>(url);
  }

  deleteCocktail(id: number): Observable<void> {
    const url = `${this.baseUrl}/cocktails/${id}`;

    return this.http.delete<void>(url);
  }

  addCocktail(payload: any): Observable<Cocktail> {
    const url = `${this.baseUrl}/cocktails`;

    return this.http.post<Cocktail>(url, payload, httpOptions);
  }

  editCocktail(payload: Partial<Cocktail>, cocktailId: number): Observable<Cocktail> {
    const url = `${this.baseUrl}/cocktails/${cocktailId}`;

    return this.http.patch<Cocktail>(url, payload, httpOptions);
  }
}
