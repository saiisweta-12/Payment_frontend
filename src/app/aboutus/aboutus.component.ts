import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  companyDetails:any;
  constructor() { 
    this.companyDetails= {
      name:'HDFC',
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbjj-B011ae26a3GVJAJNWY_i4i69vAWdaw&usqp=CAU"
  }
  }

  ngOnInit(): void {
  }

}
