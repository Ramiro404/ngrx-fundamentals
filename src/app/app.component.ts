import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import { DecrementarAction, IncrementarAction } from './contador/contador.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-app';

  contador: number = 0;

  constructor( private store:Store<AppState> ) {
    this.store.select('contador').subscribe( contador => {
      //console.log(state); escuchar propiedad especifica
      this.contador = contador;
      //this.contador = state.contador;
    })
    
    //this.contador = 10;
  }

  incrementar(){
    const accion = new IncrementarAction()
    this.store.dispatch(accion);
    //this.contador++;
  }

  decrementar(){
    const accion = new DecrementarAction();
    this.store.dispatch(accion);
    //this.contador--;
  }
}
