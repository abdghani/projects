var app = angular.module('projects',[]);

var data = [
  {
    name:'C-IDE',
    url:'https://c-ide.herokuapp.com/',
    github:'https://github.com/abdghani/ONLINE-C-IDE.git',
    description:'A simple And easy to use c IDE made using node and angular js. Begin coding in c with just your browser',
    image:'cide.png'
  },
  {
    name:'SMSANY',
    url:'https://smsany.herokuapp.com/',
    github:'https://github.com/abdghani/aws-sns',
    description:'A simple mobile push message service using Amazon sns',
    image:'cides.png'
  },
  {
    name:'P-IDE',
    url:'http://www.thegreyphase.info/',
    github:'https://github.com/abdghani/p-ide.git',
    description:'An online IDE for python where one can run machine learning codes using pandas,numpy,scipy,etc Backend hosted at amazon ec2',
    image:'makepost.png'
  },
  {
    name:'GITHUB INFO',
    url:'https://githubinfo.herokuapp.com/',
    github:'https://github.com/abdghani/gitinfo.git',
    description:'Search for anybody with there username in github',
    image:'githubinfo.png'
  },
  {
    name:'EASY TWEET',
    url:'http://tweet-makepost.rhcloud.com/',
    github:'https://github.com/abdghani/tweet.git',
    description:'A full mean stack based website where one can tweet . Login in with facebook or google ',
    image:'easytweet.png'
  },
  {
    name:'EXPRESS TODO',
    url:'http://expresstodo-makepost.rhcloud.com/',
    github:'https://github.com/abdghani/expressTodo.git',
    description:'A Standand REST api based mean stack website. Login using passport js in facebook . Store bookmark from any device and open it from anywhere . Maintain all your todos and never be late for anything . Easy to use interface with realtime bookmark share',
    image:'bookmark.png'
  },
//   {
//     name:'MOVIE SEARCH',
//     url:'http://ec2-52-66-22-195.ap-south-1.compute.amazonaws.com:3000/',
//     github:'https://github.com/abdghani/angular2_imdb_app.git',
//     description:'An angular 2 app . Get details of any MOVIE . Made using Omdb API',
//     image:'imdb.png'
//   }
];

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
  

];


app.controller("project_controller",function($scope){
  $scope.projs = data;
  $scope.skill = skills;
});
