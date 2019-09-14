import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.page.html',
  styleUrls: ['./ngif.page.scss'],
})
export class NgifPage implements OnInit {

  nam="Steve Rodriguez"
  constructor() { }
  usuario = {
    name: 'Steve',
    password: 12324,
    state: false
};

usuario2 = [
  {
    name: 'carlos',
    password: 1234567,
    state: true
  },
  {
    name: 'leonardo',
    password: 2345,
    state: true

  },
  {
    name: 'steve',
    password: 123,
    state: false
  }
]

  ngOnInit() {
  }

}
