import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {
  navigationOptions: any[];

  constructor() { 
    this.navigationOptions = [
      {
        'name': 'Dashboard',
        'link': ['/dashboard']
      },
      {
        'name': 'Authors',
        'link': ['/authors']
      },
      {
        'name': 'Books',
        'link': ['/books']
      },
      {
        'name': 'Admin',
        'link': ['/admin']
      },
      {
        'name': 'Login',
        'link': ['/login']
      }
    ]
  }

  ngOnInit() { }

}
