import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello i am parent';

  users = [
    {
      name : "john doe",
      date : '1990-05-12',
      created_date : '2022-05-21T13:06:50.153Z'
    }, 
    {
      name : "amin",
      date : '1980-02-22',
      created_date : '2021-09-21T13:06:50.153Z'
    },
    
    {
      name : "jakir",
      date : '2000-02-22',
      created_date : '2018-09-21T13:06:50.153Z'
    }, 
  ]


  // addUser

  addUser(){
    this.users.push({
      name : "hello 1",
      date : '2004-09-30',
      created_date : '2010-05-21T13:06:50.153Z'
    }, )
  }

  calculateAge (date : any){
    console.log("pipe call", date);
  return new Date().getFullYear()-new Date(date).getFullYear()
  }

  // state lifting child
  handlelike(e : any) {
    console.log("child click", e);
  }

}


