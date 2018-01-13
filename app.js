var app = angular.module('projects',[]);

var data = [
  {
    name:'NEWZY',
    url:'http://newzy.xyz',
    github:'https://github.com/abdghani/newzy/tree/master/front',
    description:'A live news app for fetching news from various online resources and user-user based colaborative filtering',
    image:'newzy.png'
  },
  {
    name:'P-IDE',
    url:'http://pide.greyphase.xyz',
    github:'https://github.com/abdghani/pIDE',
    description:'An online IDE for python where one can run machine learning codes using tensorflow,pandas,numpy,scipy,etc . Build fully on MEAN stack with socket implemetation . Supports Online Code Sharing with live coding Editing with url sharing. ',
    image:'pide.png'
  },
  {
    name:'POSify',
    url:'http://posify.greyphase.xyz/',
    github:'https://github.com/abdghani/posify',
    description:'A parts of speech tagging application with language transaltion Using NLTK and TextBlob',
    image:'posify.png'
  },
  {
    name:'FREELANCE',
    url:'http://freelance.greyphase.xyz',
    github:'https://github.com/IamAKX/Freelance',
    description:'An android app for freelance user with native implemetation and nodejs as a backend language . Redis for session management and mongo as a data storage. Download the app at http://freelance.greyphase.xyz/#!/app',
    image:'freelance.png'
  },
  {
    name:'SMSANY',
    url:'http://smsany.greyphase.xyz/',
    github:'https://github.com/abdghani/smsany',
    description:'A simple mobile push message service using Amazon sns . Can be included as a service with any platfor by user authentication  ',
    image:'smsany.png'
  },
  {
    name:'EXPRESS TODO',
    url:'http://todos.greyphase.xyz/',
    github:'https://github.com/abdghani/expressTodo.git',
    description:'A Standand REST api based mean stack website. Login using passport js in facebook . Store bookmark from any device and open it from anywhere . Maintain all your todos and never be late for anything . Easy to use interface with realtime bookmark share',
    image:'bookmark.png'
  },
  {
    name:'MOVIEREC',
    github:'https://github.com/abdghani/recomender',
    description:'A movie recommender system based on K means clustering',
    // image:'bookmark.png'
  },
  {
    name:'C-IDE',
    url:'http://cide.greyphase.xyz/',
    github:'https://github.com/abdghani/c-ide',
    description:'A simple And easy to use c IDE made using node and angular js. Begin coding in c with just your browser',
    image:'cide.png'
  },
  {
    name:'GITHUB INFO',
    url:'http://gitinfo.greyphase.xyz/',
    github:'https://github.com/abdghani/gitinfo.git',
    description:'Search for anybody with there username in github',
    image:'githubinfo.png'
  }
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

var funs = [
  'Nodejs',
  'AngularJs',
  'MongoDb',
  'Loopback',
  'Python',
  'Flask',
  'Javascript',
  'AWS','Digital Ocean',
]
app.controller("project_controller",function($scope){
  $scope.projs = data;
  $scope.skill = skills;
  $scope.funs= funs;
});
