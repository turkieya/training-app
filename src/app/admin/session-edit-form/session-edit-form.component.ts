import { Component, OnInit } from '@angular/core'; 
import {Session} from '../session'; 
import {FakeSessionItemService} from '../fake-session-item.service'; 
import {ActivatedRoute} from '@angular/router';
import { Observable} from 'rxjs';
@Component({ 
 selector: 'app-session-edit-form', 
 templateUrl: './session-edit-form.component.html', 
 styleUrls: ['./session-edit-form.component.css'] 
}) 
export class SessionEditFormComponent implements OnInit { 
  id;
  private sub:any;
 session: Session ; 
tracks = ['MEAN', 'Angular','NodeJS', 'Android', 'Swift',  'Xamarin']; 
 constructor(private sessionItemService:FakeSessionItemService ,private route: ActivatedRoute) { } 
 ngOnInit() { 
  this.sub = this.route.params.subscribe(params => {
    this.id = params['id'];
    });
    console.log('Session ID ' + this.id.toString());
    this.session = this.sessionItemService.getSession(this.id);
    }
    editSession(sessionItem) {
    console.log(sessionItem);
    }}
