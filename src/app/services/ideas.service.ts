import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class IdeasService {
    constructor(private firestore: AngularFirestore) { }

    getIdeas() {
        return this.firestore.collection('ideas').snapshotChanges();
    }

    createIdeas(data: any){
        return this.firestore.collection('ideas').add(data);
    }

    updateIdeas(data: any){
        delete data.id;
        this.firestore.doc('ideas/' + data.id).update(data);
    }

    deleteIdeas(Id: any){
        this.firestore.doc('ideas/' + Id).delete();
    }
  }