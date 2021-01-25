import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // public Xmlapi = 'http://localhost:5000'
  constructor(private http: HttpClient) { }

  ngOnInit(): void {



    let response = this.http.get('http://localhost:5000');
    response.subscribe(data => console.log(data))

  }

}
