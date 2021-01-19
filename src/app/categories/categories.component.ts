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

  title = 'Placeholder'
  yearData: year[];
  years: number[];

  public constructor(private route:ActivatedRoute, private router: Router, firestore: AngularFirestore) {
    var code = route.snapshot.data['category'];
    this.updateTitle(code);
    console.log(code);
    
    var yearList = firestore.collection('nadia').doc(code).valueChanges();
    yearList.subscribe(data => {
      this.yearData = [];
      this.years = data['years'];
      console.log(this.years);
      this.years.forEach(y => {
        var actData = firestore.collection('nadia').doc(code).collection(y.toString()).valueChanges();   
        
        var newYear = new year(y,actData);
        console.log(newYear);
        
        this.yearData.push(newYear);
      });
      
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

}
