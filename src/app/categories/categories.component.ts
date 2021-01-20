import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { Observable } from 'rxjs';
import { activity, year } from './../data-types';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  code: string;
  placeHolderData = [1,2,3,4];
  loading = true;
  title = 'Placeholder'
  yearData: year[];
  years: number[];

  public constructor(private route:ActivatedRoute, private router: Router, firestore: AngularFirestore) {
    this.code = route.snapshot.data['category'];
    this.updateTitle(this.code);
    
    var yearList = firestore.collection('nadia').doc(this.code).valueChanges();
    yearList.subscribe(data => {
      this.yearData = [];
      this.years = data['years'];

      //Each year
      this.years.forEach(y => {
        var actData = firestore.collection('nadia').doc(this.code).collection(y.toString()).valueChanges({ idField: 'docId' });   
        
        //All activities and year number
        var newYear = new year(y,actData);  
        
        this.yearData.push(newYear);        
      });

      this.loading = false;
      
    });    
    
  }

  ngOnInit() {
  }

  updateTitle(s){    
    switch(s){
      case 'academic':
        this.title = "🎓 Academic";
        break;
      case 'sports':
        this.title = "🏅 Sports";
        break;
      case 'volunteering':
        this.title = "🙋‍♀️ Volunteering";
        break;
      case 'hobbies':
        this.title = "💆 Hobbies";
        break;
      default:
        this.title = "Error";
        break;
    }
    
  }

  generateUrl(year: string, category: string, id: string){
    var url = '../file/' + year + '/' + category + '/' + id;
    return url;
  }

}
