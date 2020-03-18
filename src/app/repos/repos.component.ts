import { Component, OnInit } from '@angular/core';
import { IRepoDetails } from '../shared/interfaces';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos: IRepoDetails[];

  constructor() { }

  ngOnInit() {
  }

}
