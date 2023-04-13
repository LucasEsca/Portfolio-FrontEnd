import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from '../model/persona.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'http://localhost:8080/personas/';
  //URL = 'https://backendfl1.onrender.com/personas/'
  URL = environment.URL + 'personas/'

  constructor(private http: HttpClient) { }

 // public getPersona(): Observable<persona>{
    //return this.http.get<persona>(this.URL+ 'traer/perfil');
 // }
}
