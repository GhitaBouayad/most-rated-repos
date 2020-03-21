# MostRatedRepos
This is a coding challenge proposed by Gemography. It consists of a small webapp that lists the most starred Github repos that were created in the last 30 days. 

## Features used

  *MVC architecture
  *Flexibility through modules 
  *Angular services (Singleton design pattern)
  *Angular routing
  *Pipes 
  
  I've used 'ngx-infinite-scroll' for the scrolling part.

## Screenshot


## Prerequisites 
  *Node.js
  *Angular version 7.2.1.
 
## Installing
With npm do : 

```cmd
  npm install 
```

## API 

The JSON data is being fetched directly from the Github API : 

https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc

You can read more about the Github API over [LINK](https://developer.github.com/v3/search/#search-repositories)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).