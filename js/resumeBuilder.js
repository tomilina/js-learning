var work = {
  "jobs":[
  {"employer": "SibSU",
  "title": "Developer",
  "location": "Krasnoyarsk", 
  "dates": "12.2015 - Now",
  "decription": "Разработка модулей автоматизированной системы управления предприятием (вузом)"
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

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++){
      var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
    $("#skills").append(formattedSkill);
    }    
}

for(job in work.jobs){
  $("#workExperience").append(HTMLworkStart);
  var formattedWorkEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
  var formattedWorkTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
  var formattedWorkDates = HTMLworkDates.replace('%data%',work.jobs[job].dates);
  var formattedWorkLocation = HTMLworkLocation.replace('%data%',work.jobs[job].location);
  var formattedWorkDescription = HTMLworkDescription.replace('%data%',work.jobs[job].descripton);
  var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
  
  $(".work-entry:last").append(formattedEmployerTitle);
  $(".work-entry:last").append(formattedWorkDates);
  $(".work-entry:last").append(formattedWorkLocation);
  $(".work-entry:last").append(formattedWorkDescription);
}