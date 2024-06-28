import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Film } from '../film';


@Component({
  selector: 'app-lista-film',
  templateUrl: './lista-film.component.html',
  styleUrls: ['./lista-film.component.css']
})
export class ListaFilmComponent {
  selectedFilm: Film | undefined;
  films: Film[] = [
    {
      titolo: "300",
      annoDiUscita: "2007",
      regista: "Zack Snyder",
      attoriPrincipali: [
        "Gerard Butler",
        "David Wenham",
        "Lena Headey"
      ],
      categoria: "epico",
      valutazione: 5,
      immagineLocandina: "film_300.jpg",
    },
    {
      titolo: "La guerra dei mondi",
      annoDiUscita: "2005",
      regista: "Steven Spielberg",
      attoriPrincipali: [
        "Tom Cruise",
        "Dakota Fanning",
      ],
      categoria: "fantascienza",
      valutazione: 4,
      immagineLocandina: "film_la_guerra_dei_mondi.jpg",
    },
  ]

  setSelectedFilm(film: Film)
  {
    this.selectedFilm = film;
  }
}
