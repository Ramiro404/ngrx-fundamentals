import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { MultiplicarAction } from '../contador.actions';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  //@Input() contador!:number;
  //@Output() cambioContador = new EventEmitter();
  contador!: number;
  constructor( private store: Store<AppState> ) {
   }

  ngOnInit(): void {
    this.store.select('contador').subscribe( contador => {
      this.contador = contador;
    })
  }
 
  multiplicar(){
    const action = new MultiplicarAction(5);
    this.store.dispatch( action ); 
    //this.contador*=2;
    //this.cambioContador.emit(this.contador);
  }

  dividir(){
    this.contador/=5;
  }

}
