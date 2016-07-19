var app = angular.module('projects',[])

var data = [
  {
    name:'C-IDE',
    url:'http://cide-makepost.rhcloud.com/',
    github:'https://github.com/abdghani/ONLINE-C-IDE.git',
    description:'a simple easy to use c ide made using node and angular js. begin coding in c with just your browser',
    image:'cide.png'
  },
  {
    name:'MAKEPOST  ',
    url:'http://makepost.co.in/anoceanofsky/login',
    github:'https://github.com/abdghani/makepost.git',
    description:'a simple php social networking website where one can post,like,comment,upload photos and chat',
    image:'makepost.png'
  },
  {
    name:'GITHUB INFO',
    url:'https://githubinfo.herokuapp.com/',
    github:'https://github.com/abdghani/gitinfo.git',
    description:'A single page simple angular application with full usage of promises(q). Search for anybody on github using username',
    image:'githubinfo.png'
  },
  {
    name:'EASY TWEET',
    url:'http://tweet-makepost.rhcloud.com/',
    github:'https://github.com/abdghani/tweet.git',
    description:'A full mean stack based website where one can tweet . Login using passport js in facebook and google is provived Full use of REST api in data excahnge between front and back end',
    image:'easytweet.png'
  },
  {
    name:'EXPRESS TODO',
    url:'http://expresstodo-makepost.rhcloud.com/',
    github:'https://github.com/abdghani/expressTodo.git',
    description:'A Standarnd REST api based mean stack basedwebsite. Login using passport js in facebook . Store bookmark from any device and open it from anywhere . Main all your todos and never be late for anything . Easy to use interface with realtime bookmark share',
    image:'bookmark.png'
  }
]

var skills = [
  {
    name:'JAVASCRIPT (MEAN STACK)',
    level:85
  },
  {
    name:'PHP (LAMP STACK)',
    level:80
  },
  {
    name:'DJANGO',
    level:50
  },
  {
    name:'c++, java, python',
    level:70
  },
  

]


app.controller("project_controller",function($scope){
  $scope.projs = data;
  $scope.skill = skills;
})
