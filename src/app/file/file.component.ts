import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { activity } from '../data-types';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  loaded = false;
  category: string;
  docId: string;
  doc: Observable<activity>;

  constructor(private route: ActivatedRoute, private router: Router, firestore: AngularFirestore) {
    this.route.params.subscribe( params => {
      
      this.doc = firestore.collection('nadia').doc(params.cat).collection(params.year).doc<activity>(params.id).valueChanges();
      this.loaded = true;
      console.log(this.loaded);
      
    });

  }

  ngOnInit(): void {
  }

}
