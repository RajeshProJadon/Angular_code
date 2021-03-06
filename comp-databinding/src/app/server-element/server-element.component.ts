import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  constructor() {
    console.log('Construtor called!');
   }

   ngOnChanges(changes: SimpleChanges) {
     console.log('ngOnChanges called!');
     console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  // ngDoCheck() {

  // }

}
