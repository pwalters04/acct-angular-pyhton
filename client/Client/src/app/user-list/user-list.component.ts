import { Status } from './../models/status';
import { Location } from './../models/location';
import { User } from './../models/user';

import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private users: User[] = [];
  private locations: Location[] = [];
  private status: Status[] = [];

  headElements = ['ID', 'First', 'Last', 'Handle'];

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  constructor(private dataService: DataService) {

    // this.dataService. get_location().subscribe((res: Location[]) => {
    //   this.locations = res;
    // });
    // this.dataService. get_status().subscribe((res: Status[]) => {
    //   this.status = res;
    // });

   }

  ngOnInit() {
    // this.dataService.getUsers().subscribe((data: User[]) => this.users = data);
  }

}
