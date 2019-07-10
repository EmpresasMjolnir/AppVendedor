//import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { catchError, tap } from 'rxjs/operators';

//@Injectable({
// providedIn: 'root'
//})
//export class AutenticacaoService {

//  constructor(private http: HttpClient) { }

//  listaUsuariosService():Observable<any>{
//    return this.http.get<any>(URL_SERVICE, HTTP_HEADER).pipe(
//      tap(_ => console.log('Listando os usuários..')),
//      catchError(this.handleError<any>(`Falha no listar os usuários...`))
//    );
//  }

//  getUsuariosService(id):Observable<any>{
//    return this.http.get<any>(`${URL_SERVICE}/${id}`, HTTP_HEADER).pipe(
//      tap(_ => console.log('Localizando o usuários..')),
//      catchError(this.handleError<any>(`Falha no localizar os usuários...`))
//    );
//  }

//  insereUsuariosService(usuario):Observable<any>{
//    return this.http.post<any>(`${URL_SERVICE}`, HTTP_HEADER, usuario).pipe(
//      tap(_ => console.log('Inserindo o usuários..')),
//      catchError(this.handleError<any>(`Falha no inserir os usuários`))
//    );
//  }
//}
