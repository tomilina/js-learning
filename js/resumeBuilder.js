var work = {
  "jobs":[
  {"employer": "SibSU",
  "title": "Developer",
  "city": "Krasnoyarsk", 
  "dates": "12.2015 - Now",
  "decription": ""
  }
  ]
};

var projects = {
  "projects": [
  {
    "title": "Developer",
    "dates": "12.2015 - Now",
    "decription": "",
    "images": []
  }
  ]
};

var bio = {
  "name": "Anastasia Tomilina",
  "role": "Python developer",
  "contacts": {
    "mobile": "8-983-577-68-62",
    "email": "nastomila@gmail.com",
    "github": "tomilina",
    "location": "Krasnoyarsk, Russia"    
  },
  "welcomeMessage": "Hello! What's up",
  "skills": ["Python","JavaScript","HTML","CSS","Odoo"],
  "bioPic": "images/fry.jpg"
  
};

var education = {
  "schools": [
    {
      "university": "SibSU",
      "location": "Krasnoyarsk, Russia",  
      "degreeDates": "2010 - 2016",
      "url": "",
      "majors": []
    }
  ],
  "onlineCourses": [
    {
      "title": "JS basics",
      "school": "Udacity",
      "dates": "2017",
      "url": ""
    }
  ]

};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);



if (bio.skills.length > 0){
    $("#main").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
}

for(job in work.jobs){
  $("#skills").append(HTMLworkStart);
  var formattedWorkEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
  var formattedWorkTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
  var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
}