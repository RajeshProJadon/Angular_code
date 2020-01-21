import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // allowNewServer = false;
  // serverCreationStatus = 'No server creation yet';
  // serverName = 'TestServer';
  // username = '';
  showdetails = false;
  log = [];
  // serverCreated = false;
  // servers = ['Testserver', 'Testserver 2'];
  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewServer = true;
  //   }, 2000);
  // }

  ngOnInit() {
  }

  // onCreateServer() {
  //   this.serverCreated = true;
  //   this.servers.push(this.serverName);
  //   this.serverCreationStatus = 'Now server is created and ready ! Name is' + this.serverName;
  // }

  // onUpdateServerName(event: Event) {
  //    this.serverName = (<HTMLInputElement>event.target).value;
  //    console.log(event);
  // }

  // onSearchName() {
  //   this.username = 'Rajesh';
  // }

  // onUpdateUsername(event: Event) {
  //   this.username = (<HTMLInputElement>event.target).value;
  //   console.log(event);
  // }
   onDisplayDetails() {
     this.showdetails = !this.showdetails;
     this.log.push(this.log.length + 1);
   }
}
