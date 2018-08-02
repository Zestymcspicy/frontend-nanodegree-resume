
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
    skills : ["JavaScript","jQuery","HTML","CSS","American Cuisine","Cat Herding"],
    biopic : "https://www.halbeckerman.com",
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

}
