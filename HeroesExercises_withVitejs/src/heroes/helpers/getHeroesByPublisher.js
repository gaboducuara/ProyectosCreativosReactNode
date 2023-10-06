 import {heroes} from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {

    const validPublisher = ['DC Comics' , 'Marvel Comics'];

    // import { HeroList } from '../components'

    // si los validPublisher incluyen los publisher que recibo como argumento
    //pero si no lo incluye, entonces lanzare un throw new error diciendo
    //que el publisher no es valido
        if(!validPublisher.includes(publisher)) {
        throw new Error(`${ publisher } is not a valid publisher`)
        }
            return heroes.filter(heroe => heroe.publisher === publisher);
} 