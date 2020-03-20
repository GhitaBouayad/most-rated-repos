import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})

export class ReposListComponent implements OnInit {
  //@Input() reposList:Object;
  page : number = 1;

  reposList;
  sortedList

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getReposDetails();
  }

  getReposDetails(){
    this.dataService.getReposByPage(this.page).subscribe(repos => {
      this.reposList = repos.items
    })
  }

  onScroll() {
    this.page = this.page ++;
    this.dataService.getReposByPage(this.page).subscribe(repos => {
      this.reposList = this.reposList.concat(repos.items);
    })
  }


}
