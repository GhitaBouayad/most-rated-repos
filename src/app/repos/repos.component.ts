import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos: Object;

  constructor(private dataService: DataService) {
    this.dataService.getRepos().subscribe(reposList => this.repos = reposList.items)
   }

  ngOnInit() {
  }

}
