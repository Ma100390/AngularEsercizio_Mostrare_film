import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFilmComponent } from './lista-film/lista-film.component';
import { FilmDettaglioComponent } from './film-dettaglio/film-dettaglio.component';


@NgModule({
  declarations: [
    ListaFilmComponent,
    FilmDettaglioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaFilmComponent
  ]
})
export class FilmsModule { }