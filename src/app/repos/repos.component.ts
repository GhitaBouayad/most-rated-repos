import { Component,OnInit } from '@angular/core';

import { DataService } from '../core/data.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  page : number;
  repos;

  constructor(private dataService: DataService){
    this.page = 1;
   }

  ngOnInit() {
    this.dataService.getReposByPage(this.page).subscribe(reposList => this.repos = reposList.items)
  }
}
