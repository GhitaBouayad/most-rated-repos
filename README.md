# MostRatedRepos
This is a coding challenge proposed by Gemography. It consists of a small webapp that lists the most starred Github repos that were created in the last 30 days. 

## Features used
<ul>
  <li>MVC architecture
  <li>Flexibility through modules 
  <li>Angular services (Singleton design pattern)
  <li>Angular routing
  <li>Pipes 
</ul>
  I've used 'ngx-infinite-scroll' for the scrolling part.

## Screenshot

The template inspired by github was made manually. 

![alt text](https://github.com/GhitaBouayad/most-rated-repos/blob/master/screenshots/1.PNG)
![alt text](https://github.com/GhitaBouayad/most-rated-repos/blob/master/screenshots/2.PNG)
![alt text](https://github.com/GhitaBouayad/most-rated-repos/blob/master/screenshots/3.PNG)

## Prerequisites 
<ul>
  <li>Node.js
  <li>Angular version 7.2.1.
<ul>
 
## Installing
With npm do : 

```cmd
  npm install 
```

## API 

The JSON data is being fetched directly from the Github API : 

`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`

You can read more about the Github API over [LINK](https://developer.github.com/v3/search/#search-repositories)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

##  Issues

when launching the app, it seems to work properly. But sometimes i just get few repos  listed, i don't know if that comes from the Rate limit of the api. I've tried to clear cache files but it doesn't seem to work. If you face this issue, please refresh the page later or try to clean out your cache.

![alt text](https://github.com/GhitaBouayad/most-rated-repos/blob/master/screenshots/4.PNG)

