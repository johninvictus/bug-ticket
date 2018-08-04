import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection}
  from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Issue} from '../models/issue';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  issueCollection: AngularFirestoreCollection<Issue>;
  issueDoc: AngularFirestoreDocument<Issue>;
  issues: Observable<Issue[]>;
  issue: Observable<Issue>;

  constructor(private afs: AngularFirestore) {
    this.issueCollection = this.afs.collection('issues', ref => {
      return ref.orderBy('created_at', 'desc');
    });
  }

  getIssues(): Observable<Issue[]> {
    this.issues = this.issueCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Issue;
        const id = a.payload.doc.id;
        return Object.assign({}, {id: id}, data);
      }))
    );
    return this.issues;
  }

  newIssue(issue: Issue) {
    this.issueCollection.add(issue);
  }

  getIssue(id: string): Observable<Issue> {
    this.issueDoc = this.afs.doc<Issue>(`issues/${id}`);
    this.issue = this.issueDoc.snapshotChanges().pipe(
      map(action => {
        if (action == null) {
          return null;
        } else {
          const data = action.payload.data() as Issue;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.issue;
  }

  deleteIssue(id: string) {
    this.issueDoc = this.afs.doc(`issues/${id}`);
    this.issueDoc.delete();
  }
}
