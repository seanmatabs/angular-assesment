import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {SetOne, SETS, SetTwo} from '../models/models';

interface ICache { [ key: string ]: BehaviorSubject<any>; }
type serializable = object;
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject: ICache;

  constructor() {
    this.subject = Object.create( null );
  }

  getSet<T extends serializable>(set): BehaviorSubject<T>  {
    if ( this.subject[set] ) {
      return this.subject[set];
    } else if (localStorage.getItem( set )) {
      this.subject[set] = new BehaviorSubject(JSON.parse(localStorage.getItem(set)));
      return this.subject[set];
    } else {
        let data;
        if (set === SETS.ONE) {
          data = {name: 'Michael', surname: 'Baker'} as SetOne;
        } else {
          data = {email: 'michael@test.com', cell_no: '0825558364'} as SetTwo;
        }
        this.createSet(set, data);
        this.subject[ set ] = new BehaviorSubject( JSON.parse( localStorage.getItem( set ) ) );
        return this.subject[set];
    }
  }
  updateSet(set, data) {
    localStorage.setItem( set, JSON.stringify( data ) );

    if ( this.subject[ set ] ) {
      this.subject[ set ].next( data );
      return this.subject[ set ];
    }

    return this.subject[ set ] = new BehaviorSubject( data );
  }

  createSet<T extends serializable>( key: string, value: T ): BehaviorSubject<T> {
    localStorage.setItem( key, JSON.stringify( value ) );
    if ( this.subject[ key ] ) {
      this.subject[ key ].next( value );
      return this.subject[ key ];
    }
    return this.subject[ key ] = new BehaviorSubject( value );
  }
}

