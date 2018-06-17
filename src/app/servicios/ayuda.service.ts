import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class AyudaService {

  public data:any;

  constructor(private db: AngularFirestore){ 
    


    }

}
