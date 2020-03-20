import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})

export class ReposListComponent implements OnInit {
  @Input() reposList:Object;
  currentDate : number = Date.now()

  constructor() { }

  ngOnInit() {
  }

}
