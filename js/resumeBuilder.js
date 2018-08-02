
const model = {

  bio : {
    name : "Harold Beckerman",
    role : "Kitchen Manager/Front End Developer",
    contacts : {
      mobile : "7857665794",
      email : "halbeckerman@gmail.com",
      github : "github.com/Zestymcspicy",
      location : "Lawrence, KS, United States"
    },

    welcomeMessage : "Hey! Hey!",
    skills : [" JavaScript"," jQuery"," HTML"," CSS"," American Cuisine"," Cat Herding"],
    biopic : "images/fry.jpg",
    display : function() {},
  },

  education : {

    schools : [
      {
        name : "University of Kansas",
        location : "Lawrence, KS, United States",
        degree : "Philosophy",
        dates : "August 2000 - May 2005"
      },
      {
        name : "Shawnee Mission East",
        location : "Prairie Village, KS",
        degree: "General Studies",
        dates : "August 1994 - May 1998"
      },
    ],

    onlineCourses :  [
      {
      title : "Front End Developer Nanodegree",
      school : "Udacity",
      dates : "March 2018 - Present",
      url : "https://www.udacity.com",
    }
    ],

    display : function () {},
  },

  work : {
    jobs : [
    {
      employer : "Free State Brewing Company",
      title : "Kitchen Manager",
      location : "636 Massachusetts, Lawrence, KS",
      dates : "November 2002 - Present",
      description : `First Brew Pub in the state of Kansas since prohibition.
      Winner of the Best Restaurant in Kansas 2017 by the KRHA`
    }
  ],

  display : function () {},
},

  projects : {
    projects : [
  {
    title : "Cat Clicker",
    dates : "7/15/2018 - 7/22/2018",
    description : "Cat clicker project for udacity",
    images : ["images/197x148.gif"]
  }
],
  display : function () {},
}
};

const controller = {

  init : function () {
    view.renderBio();
  },

  passBio : function () {
    return model.bio;
  },
};

const view = {

  renderBio : function () {

    let myBio = controller.passBio();
    let headerName = HTMLheaderName.replace("%data%", myBio.name);
    let headerRole = HTMLheaderRole.replace("%data%", myBio.role);
    let bioPic = HTMLbioPic.replace("%data%", myBio.biopic);
    let skills = HTMLskillsStart + HTMLskills.replace("%data%", myBio.skills);
    let greeting = HTMLwelcomeMsg.replace("%data%", myBio.welcomeMessage);
    $("#header").append(headerName, headerRole, greeting, bioPic, skills);
    let mobile = HTMLmobile.replace("%data%", myBio.contacts.mobile);
    let email = HTMLemail.replace("%data%", myBio.contacts.email);
    let gitHub = HTMLgithub.replace("%data%", myBio.contacts.github);
    let location = HTMLlocation.replace("%data%", myBio.contacts.location);
    $("#topContacts").append(mobile, email, gitHub, location);

  }
}

controller.init();
