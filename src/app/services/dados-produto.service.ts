import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../model/produto';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const URL_API = `http://10.69.136.129:3000/cadastroProduto`

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json;charset=utf-8'
  })
}
@Injectable({
  providedIn: 'root'
})
export class DadosProdutoService {

  constructor(private http: HttpClient) { }

  getDados(param:string = ""):Observable<Produto> {
      return this.http.get<Produto>(`${URL_API}${param}`,httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao recuperar os dados'))
    );
  }

  addDados(dados:Produto):Observable<Produto>{
      return this.http.post(URL_API, dados, httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao registra a avaliação'))
    )
  }

  updateDados(dados:Produto):Observable<Produto>{
      return this.http.put(`${URL_API}/${dados.id}`, dados, httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao atualizar a avaliação'))
    )
  }

  //método privado para exibir o erro
  private handleError<T>(Operator = 'operation', result?: T){
    return (error: any):Observable<T> => {
      console.error(error); //log do erro na console

      //mantem o app rodando por ter retornado o obj vazio
      return of(result as T);
    };
  }

}
