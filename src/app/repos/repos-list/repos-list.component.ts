import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})

export class ReposListComponent implements OnInit {
  page : number = 1;
  lastPageNumber: number = 0;
  filteredList;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    //Requesting the first page of the api the get first elements 
    //and the Last number of pages of the api 
    this.getReposDetails();
  }

  getReposDetails(){
    this.dataService.getReposByPage(1).subscribe(repos => {
      this.lastPageNumber = this.dataService.getLastPageNumber(); 
      this.filteredList = this.filterList(repos.items);
    })
  }

  // Requesting API left pages when scrolling 
  onScroll() {
    //Stop requesting when number of pages exceed max number of pages of the api
    if(this.page<= this.lastPageNumber){
      this.page++;
      this.dataService.getReposByPage(this.page).subscribe(repos => {
          this.filteredList = this.filteredList.concat(this.filterList(repos.items));
          //Array.prototype.push.apply(this.filteredList, this.filterList(repos.items));
      })
    }
    //To check that scrolling is working 
    console.log('Scrolled List : ');
    console.log(this.filteredList);
  }

  //Filtering the list 
  filterList(list:[]){
    //
    let filteredList = list.map(element => {
      //Creating new objects containing just the elements needed to display the details of every repo
      let obj: Object = Object.assign({},
           ...Object
                     .keys(element)
                     .filter(k=> {
                       
                       let result = k == 'pushed_at' || k == 'html_url' || k == 'owner' || k == 'avatar_url' || k == 'stargazers_count' || k == 'open_issues_count' ||  k == 'full_name' || k == 'description'
                       return result;
                     })
                     .map(k=> ({[k] : element[k]}))
     )        
     return obj;       
          
   });
   return filteredList
  }
}
