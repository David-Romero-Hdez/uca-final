import { Injectable } from '@angular/core';
import { Places } from 'src/interfaces/place.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private dbPath = '/places';
  private databaseRef: AngularFirestoreCollection<Places>
  private item$: Observable<Places[]>;

  constructor(private db: AngularFirestore) {
    this.databaseRef = db.collection(this.dbPath);
    this.item$ = this.databaseRef.valueChanges();
  }

  getAll(): Observable<Places[]> {
    return this.item$;
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
