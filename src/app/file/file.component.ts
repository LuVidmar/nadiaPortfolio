import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { activity } from '../data-types';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  catColor;
  loaded = false;
  category: string = 'Category';
  doc: Observable<activity>;
  downloadUrl: string = '';

  constructor(private route: ActivatedRoute, private router: Router, firestore: AngularFirestore, private storage: AngularFireStorage) {
    this.route.params.subscribe( params => {
      this.setCat(params.cat);
      
      var fileLoc: string = 'gs://lvwebportfolio.appspot.com/Nadia/' + params.cat + '/' + params.year + '/' + 'Constancia CUIL.pdf';
      var ref = storage.refFromURL(fileLoc).getDownloadURL();
      ref.subscribe(d=>{
        console.log(d);
        this.downloadUrl=d;
      });
      
      this.doc = firestore.collection('nadia').doc(params.cat).collection(params.year).doc<activity>(params.id).valueChanges();
      this.loaded = true;
      
    });

  }

  setCat(cat: string){
    switch(cat){
      case 'academic':
        this.category = "🎓 Academic";
        this.catColor = '#bae1ff';
        break;
      case 'sports':
        this.category = "🏅 Sports";
        this.catColor = '#ffffba';
        break;
      case 'volunteering':
        this.category = "🙋‍♀️ Volunteering";
        this.catColor = '#baffc9';
        break;
      case 'hobbies':
        this.category = "💆 Hobbies";
        this.catColor = '#ffdfba';
        break;
      default:
        this.category = "Error";
        this.catColor = '#ffb3ba';
        break;
    }
  }

  ngOnInit(): void {
  }

}
