import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  leftTitle :string= 'Making a World Cleaned';
  leftSubtitle :string= 'Garbage is a great resource in the wrong place';
  leftSubtitleTwo :string= 'that lacks someone'+'`'+'s imagination to be recycled for the benefit of all of us.';
  constructor() { }

  ngOnInit(): void {
   
    
  }

  
  

}
