import { Http } from '@angular/http'; // servico externo http
import { Injectable } from '@angular/core'; // permite a injecao de servicos externos
import { Oferta } from './shared/oferta.model';
import 'rxjs/add/operator/toPromise'; // importa o recurso toPromisse

@Injectable() // faz com que os servicos externos sejam injetados na classe
export class OfertasService
{
    // recebe e atribui o servico externo http
    constructor(private http: Http){}

    public getOfertas(): Promise<Oferta[]>
    {
        // faz a requisicao http e retorna 
        return this.http.get('http://localhost:3000/ofertas')
            .toPromise() // converte o observable retornado para promisse
            .then( (resposta: any) => resposta.json() ) // apos a conversao, retorna o dado em json pelo metodo json
    }
}
