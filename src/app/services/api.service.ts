import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-FunTranslations-Api-Secret': 's_hadZmTUC2zHR3fSCxHbAeF'
  })
}

@Injectable()
export class ApiService {

  private readonly url = 'https://api.funtranslations.com/translate/valyrian.json?text=';

  constructor(private http: HttpClient) {}

  translate(text: string): Observable<any> {
    // todo: is valid string
    const updatedUrl = this.url + `'${text}'`;
    // TODO: Problem with cors
    return this.http.post(updatedUrl, 'placeholder', httpOptions);
  }
}
