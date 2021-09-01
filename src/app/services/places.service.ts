import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire//compat/firestore';
import { Places } from 'src/interfaces/place.model';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private dbPath = '/places';

  databaseRef: AngularFirestoreCollection<Places>

  constructor(private db: AngularFirestore) {
    this.databaseRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Places> {
    return this.databaseRef;
  }

  create(place: Places): any {
    return this.databaseRef.add({ ...place });
  }

  update(id: string, data: any): Promise<void> {
    return this.databaseRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.databaseRef.doc(id).delete();
  }
}
