import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  categories = [
    {
      title: '🎓 Academic',
      about: 'Here I will post every academic activity, competition or archievemnt along with documents, photos and backstories to back them up.',
      link: '/academic'
    },
    {
      title: '🏅 Sports',
      about: 'In this section you will find the sports Ive practiced over the years and some photos I feel like sharing.',
      link: '/sports'
    },
    {
      title: '🙋‍♀️ Volunteering',
      about: 'Eventhough volunteering is an habit of lately, I would like to keep a good record of what Ive done to remind myself of whats important.',
      link: '/volunteering'
    },
    {
      title: '💆 Hobbies',
      about: 'The things I spend my free time on will appear in this page. I will try to update the status of each one when I make progress.',
      link: '/hobbies'
    }
  ];

  ngOnInit(): void {
  }

}
