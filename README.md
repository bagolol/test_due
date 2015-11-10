Show Issues
===================

Task
-----

* Build an interface to show common issues 

* Currently the main functionalities include: 
  - importing issues from an endpoint
  - showing issues on a table
  - filtering issues by clicking on the table element (assignee, category, project)
  - alphabetically sorting table (click on header)
  - filtering by typing

How to run
----

* for local use, clone or fork the repo to your local machine
* run `npm install && bower install`
* start server: `node server.js`
* navigate to **localhost:3000/#/issues**

Technologies used
----

* server - nodejs (express)
* frontend - angular and bootstrap


Notes
----

* given the simplicity of the app, AngularJS feels a bit like overkill, 
  but I thought it could work well and could be a useful refresher.

* I used Bootstrap to make it responsive. I think it's easy enough 
  to navigate and interact with even on a mobile screen.
  
* I deployed the app on Heroku. Again, not part of the task, but a good refresher.

* the home page is currently empty. I thought it made more sense to display the issues
  on a **/issues** page. Also, if I had to further develop this, the homepage would probably only show
  the issues I worked on or need to work on.
  



