import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Film } from '../film';


@Component({
  selector: 'app-film-dettaglio',
  templateUrl: './film-dettaglio.component.html',
  styleUrls: ['./film-dettaglio.component.css']
})
export class FilmDettaglioComponent implements OnChanges {
  @Input() film: Film | undefined;
  @Input() valutazioni: number[] | undefined;
  @Input() valutazioniNo: number[] | undefined;

  ngOnChanges(changes: SimpleChanges): void
  {
    if (this.film?.valutazione !== undefined && this.film?.valutazione >= 0) {
      this.valutazioni = Array(this.film?.valutazione).fill(0).map((x, i) => i);
      this.valutazioniNo = Array(5 - this.film?.valutazione).fill(0).map((x, i) => i);
    }
    
    console.log("this.valutazioni: " + this.valutazioni);
    console.log("this.valutazioniNo: " + this.valutazioniNo);
  }
  
  bookSeat()
  {
    console.log("Posto prenotato!");
  }
}
