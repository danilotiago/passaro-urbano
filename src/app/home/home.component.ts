import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { log } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService] // os comp. filhos tem acesso a este servico
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit()
  {
    this.ofertasService.getOfertas()
      .then( (ofertas_local: Array<Oferta>) => { this.ofertas = ofertas_local; console.log(ofertas_local);
       })
      .catch( (param_local: any) => { console.log(param_local) })
  }

}
