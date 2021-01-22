import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { Observable } from 'rxjs';
import { activity } from '../data-types';
import { PhotoVisualizerComponent } from '../photo-visualizer/photo-visualizer.component';

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
  modalRef: MDBModalRef;
  year: string;

  constructor(private modalService: MDBModalService, private route: ActivatedRoute, private router: Router, firestore: AngularFirestore, private storage: AngularFireStorage) {
    this.route.params.subscribe( params => {
      this.year = params.year;
      this.setCat(params.cat);
      
      var fileLoc: string = 'gs://nadia-webportfolio.appspot.com/' + params.cat + '/' + params.year + '/' + params.id + '/' + 'file.pdf';
      console.log(fileLoc);
      
      var ref = storage.refFromURL(fileLoc).getDownloadURL();
      ref.subscribe(d=>{
        console.log(d);
        this.downloadUrl=d;
      });
      
      this.doc = firestore.collection('activities').doc(params.cat).collection(params.year).doc<activity>(params.id).valueChanges();
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

  modalOptions = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: 'modal-fluid modal-full-height modal-dialog-centered',
    containerClass: '',
    animated: true,
    data: {
        imglink: './../../assets/grayloading.jpg'
    }
  }
  
  openModal(imgLink: any) {
    this.modalOptions.data.imglink = imgLink;
    this.modalRef = this.modalService.show(PhotoVisualizerComponent, this.modalOptions)
  }

  ngOnInit(): void {
  }

}
