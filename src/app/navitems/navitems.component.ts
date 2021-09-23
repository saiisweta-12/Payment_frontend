import { Component } from '@angular/core';

@Component({
  selector: 'app-navitems',
  templateUrl: './navitems.component.html',
  styleUrls: ['./navitems.component.css']
})
export class NavitemsComponent {
  
  navitems: Array<any>
  
  constructor() {
    this.navitems = [{
      text: "About Us",
      link: "aboutus"
    },
    {
      text: "Login",
      link: "login"
    },
    {
      text:"Dashboard",
      link:"dashboard"
    },
     {
      text:"Transaction",
      link:"transaction"
    },
    {
      text:"TransactionDetails",
      link:"activity"
    },
    {
      text:"Logout",
      link:"aboutus"
    },
  ]
  }


}