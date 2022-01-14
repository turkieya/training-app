import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {

  constructor(private sessionItemService:FakeSessionItemService) { }

  ngOnInit(): void {
  }
  addSession(sessionItem: NgForm):void{
    console.log("session Infos..."+JSON.stringify(sessionItem.value));
    console.log("session Infos..."+sessionItem.value.name);
    this.sessionItemService.add(sessionItem.value);

  }
   

}
