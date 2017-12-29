import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ] // informa quais serviços serão providos para este componente
})
export class RestaurantesComponent implements OnInit {

              // define qual atributo sera responsavel pelo servico sem precisar instanciar o servico
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() 
  {
    this.ofertasService.getOfertasPorCategoria('restaurante')
        .then( (ofertas: Oferta[] ) => { console.log(ofertas) } )
  }

}
