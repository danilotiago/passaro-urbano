import { Http } from '@angular/http'; // servico externo http
import { Injectable } from '@angular/core'; // permite a injecao de servicos externos
import { Oferta } from './shared/oferta.model';

@Injectable() // faz com que os servicos externos sejam injetados na classe
export class OfertasService
{
    // recebe e atribui o servico externo http
    constructor(private http: Http){}

    public ofertas: Array<Oferta> = [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]

        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ]

    public getOfertas(): Array<Oferta>
    {
        return this.ofertas;
    }

    public getOfertas2(): Promise<Array<Oferta>>
    {
        return new Promise((resolve, reject) => {
            let deu_certo = true;
            
            if(deu_certo)
            {
                setTimeout( () => resolve( this.ofertas ), 3000 );
            }
            else
            {
                reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado' });
            }
            
        })
        // encadeamento sincrono de then's
        // tratativa apos do retorno da promisse
        .then((ofertas: Array<Oferta>) => {
            // executa alguma logica
            console.log('primeiro then');
            return ofertas;
            
        })    
        // segunda tratativa do retorno da promisse
        .then((ofertas: Array<Oferta>) => {
            // executa alguma logica
            console.log('Segundo then');
            return ofertas;
            
        })
    }
}
