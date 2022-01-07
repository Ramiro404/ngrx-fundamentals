import { actions, DECREMENTAR, INCREMENTAR, MULTIPLICAR } from './contador.actions';

export function contadorReducer( state: number = 10, action: actions) {
    switch( action.type ){
        case INCREMENTAR:
            return state + 1;
        case DECREMENTAR:
            return state - 1;
        case MULTIPLICAR:
            return state * action.payload;
        default:
            return state;
    }
}