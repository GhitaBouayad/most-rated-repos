import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../core/data.service';
import { isPlatformWorkerApp } from '@angular/common';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})

export class ReposListComponent implements OnInit {
  //@Input() reposList:Object;
  page : number = 1;
  lastPageNumber: number = 0;
  itemsPerPage: number = 0;
  reposList;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getReposDetails();
  }

  getReposDetails(){
    this.dataService.getReposByPage(1).subscribe(repos => {
      this.reposList = repos.items;
      this.lastPageNumber = this.dataService.getLastPageNumber();
    })
  }

  onScroll() {
    if(this.page<= this.lastPageNumber){
      this.page++;
      this.dataService.getReposByPage(this.page).subscribe(repos => {
        //const found = repos.item.some(r=> this.reposList.includes(r))
          this.itemsPerPage = this.reposList.length     
          console.log('Items per page: ' + this.itemsPerPage )
          this.reposList = this.reposList.concat(repos.items);
      })
    }
  }
}
