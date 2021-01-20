import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { activity } from '../data-types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  exists = false;
  images = [1,2,3,4,5];
  frm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, public firestore: AngularFirestore, private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      title: [''],
      shortDesc: [''],
      desc: [''],
      trans: [''],
      imgLink1: [''],
      imgLink2: [''],
      imgLink3: [''],
      imgLink4: [''],
      imgLink5: ['']
    });
    this.route.params.subscribe( params => {

      firestore.collection('nadia').doc(params.cat).collection(params.year).doc<activity>(params.id).get().subscribe(d=>{
       
        if(d.exists){
          firestore.collection('nadia').doc(params.cat).collection(params.year).doc<activity>(params.id).valueChanges().subscribe(dat=>{
            this.loadData(dat);
          });
          this.exists = true;
          
        }
      });

    });
  }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    console.log(form.value);
    // Check Document existance
    if(this.exists){
      this.route.params.subscribe( params => {
        this.firestore.collection('nadia').doc(params.cat).collection(params.year).doc<activity>(params.id).update({
          title:  form.value.title,
          desc: form.value.desc,
          shortDesc: form.value.shortDesc,
          trans: form.value.trans,
          imgLink: [form.value.imgLink1,form.value.imgLink2,form.value.imgLink3,form.value.imgLink4,form.value.imgLink5],
        });
      });

    }
    //Otherwise create
    else{
      this.route.params.subscribe( params => {
        this.firestore.collection('nadia').doc(params.cat).collection(params.year).doc<activity>(params.id).set({
          title:  form.value.title,
          desc: form.value.desc,
          shortDesc: form.value.shortDesc,
          trans: form.value.trans,
          imgLink: [form.value.imgLink1,form.value.imgLink2,form.value.imgLink3,form.value.imgLink4,form.value.imgLink5],
        });
      });
    }
    this.updateImgs(form);
  }

  loadData(data: any){
    this.frm.get('title').setValue(data.title);
    this.frm.get('desc').setValue(data.desc);
    this.frm.get('shortDesc').setValue(data.shortDesc);
    this.frm.get('trans').setValue(data.trans);
    
    for (var i = 0 ; data.imgLink.length > i ; i++){
      var s: string = 'imgLink'+(i+1);
      this.frm.get(s).setValue(data.imgLink[i]);
      var img: string = 'img'+(i+1);
      document.getElementById(img).setAttribute('src', data.imgLink[i]);      
    }
  }

  updateImgs(form: any){
    document.getElementById('imgLink1').setAttribute('src', form.value.imgLink1);
    document.getElementById('imgLink2').setAttribute('src', form.value.imgLink2);
    document.getElementById('imgLink3').setAttribute('src', form.value.imgLink3);
    document.getElementById('imgLink4').setAttribute('src', form.value.imgLink4);
    document.getElementById('imgLink5').setAttribute('src', form.value.imgLink5);
  }

}
