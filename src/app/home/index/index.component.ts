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
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti consequuntur alias. Sit vitae perspiciatis officiis, dolorem tempore impedit explicabo nihil consequuntur minus necessitatibus voluptatibus asperiores! Ea blanditiis et veniam!',
      link: '/academic'
    },
    {
      title: '🏅 Sports',
      about: 'Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti consequuntur alias. Sit vitae perspiciatis officiis, dolorem tempore impedit explicabo nihil consequuntur minus necessitatibus voluptatibus asperiores! Ea blanditiis et veniam!',
      link: '/sports'
    },
    {
      title: '🙋‍♀️ Volunteering',
      about: 'Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti consequuntur alias. Sit vitae perspiciatis officiis, dolorem tempore impedit explicabo nihil consequuntur minus necessitatibus voluptatibus asperiores! Ea blanditiis et veniam!',
      link: '/volunteering'
    },
    {
      title: '💆 Hobbies',
      about: 'Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti consequuntur alias. Sit vitae perspiciatis officiis, dolorem tempore impedit explicabo nihil consequuntur minus necessitatibus voluptatibus asperiores! Ea blanditiis et veniam!',
      link: '/hobbies'
    }
  ];

  ngOnInit(): void {
  }

}
