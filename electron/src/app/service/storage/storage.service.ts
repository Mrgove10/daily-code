import { Injectable } from '@angular/core';
import { App } from 'electron';
import { Datastore } from 'nedb' ;

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  constructor(
    private app: App,
    private db : any
  ){}

  ngOnInit(){
    var storagepath = this.app.getPath('userData');
    this.db = new Datastore({ filename: storagepath + 'Database', autoload: true });
  }

  testmethode(){
    var doc = { hello: 'world'
               , n: 5
               , today: new Date()
               , nedbIsAwesome: true
               , notthere: null
               , notToBeSaved: undefined  // Will not be saved
               , fruits: [ 'apple', 'orange', 'pear' ]
               , infos: { name: 'nedb' }
               };

    this.db.insert(doc, function (err, newDoc) {   // Callback is optional
      // newDoc is the newly inserted document, including its _id
      // newDoc has no key called notToBeSaved since its value was undefined
    });

  }
}
