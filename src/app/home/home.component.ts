import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService] // os comp. filhos tem acesso a este servico
})
export class HomeComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  ngOnInit()
  {
    console.log(this.ofertasService.getOfertas());
  }

}
