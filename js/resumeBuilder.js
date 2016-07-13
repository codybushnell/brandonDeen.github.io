	var data = "%data%";
	var bio = {
		name: "Brandon Deen",
		role: "Software Engineer",
		picURL: "images/pic.jpg",
		contacts: { email: "brandon.deen47@gmail.com", github: "brandonDeen", mobile: "555-867-5306", location: "Mansfield, TX" },
		message: "'Once more unto the breach'.replace('breach', 'LAN Party');",
				skills: ["Programming: Java, Python, C#, C", "Star Wars Trivia", "General Nerdiness" ],
		displayHeader: function(){
			var skills = '';
			for(var i=0; i<bio.skills.length; i++){ 
				skills += HTMLskills.replace(data, bio.skills[i]); 
			}

			$("#header").append(HTMLbioPic.replace(data, bio.picURL));
			$("#header").prepend(HTMLheaderRole.replace(data, bio.role));
			$("#header").prepend(HTMLheaderName.replace(data, bio.name));
			$("#header").append(HTMLwelcomeMsg.replace(data, bio.message));

			if( bio.skills.length > 0 ){
				$("#header").append(HTMLskillsStart);
				$("#skills").append(skills);
			}
			var formattedContacts = HTMLemail.replace(data, bio.contacts.email) +
				// HTMLmobile.replace(data, bio.contacts.mobile) + 
				HTMLgithub.replace(data, bio.contacts.github) +
				HTMLlocation.replace(data, bio.contacts.location);
			$("#topContacts").prepend(formattedContacts);
		},
		displayFooter: function(){ 
			var formattedContacts = HTMLemail.replace(data, bio.contacts.email) +
				// HTMLmobile.replace(data, bio.contacts.mobile) + 
				HTMLgithub.replace(data, bio.contacts.github) +
				HTMLlocation.replace(data, bio.contacts.location);
			$("#footerContacts").prepend(formattedContacts); 
		}
	};
	var work = {
		jobs: 
		[
			{
				role: "Associate Software Engineer",
				employer: "Fidelity Investments",
				start: "November 2015",
				end: "Present",
				location: "Westlake, TX",
				description: "Call Routing: developed software for migration to Fidelity's Next Generation Call Center using the Genesys Platform (Javascript), developed test automation using Ruby and Cucumber, as well as updating network plans (At&T Route It)"
			},
			{
				role: "Associate Software Engineer",
				employer: "Fidelity Investments",
				start: "June 2015",
				end: "November 2015",
				location: "Raleight, NC",
				description: "Leap Associate: Training Phase - developed skills in SQL, Java, Spring, Web Services, HTML, CSS, Javascript, C#, .NET, WPF. <br>Project Phase - developed software for the Quote Audit Meter Report, in a Full Stack environment (Java, Spring, Javascript, HTML/Bootstrap)."
			},
			{
				role: "Stocker/Receiver",
				employer: "Lowes Home Improvement",
				start: "October 2012",
				end: "June 2015",
				location: "Mansfield, TX",
				description: "Responsible for unloading freight, operating lift trucks, and stocking freight"
			},
			{
				role: "Company Executive Officer",
				employer: "U.S. Army",
				start: "June 2008",
				end: "August 2012",
				location: "Fort Leonard Wood, MO",
				description: "B Company/554th Engineer Battalion/1st Engineer Brigade: responsible for logistical support of the company's training, such as ordering supplies and reserving training areas. "
			}
		],
		display: function(){
			for(job in work.jobs){
				$("#workExperience").append(HTMLworkStart);
				$(".work-entry:last").append(HTMLworkEmployer.replace(data, work.jobs[job].employer) + HTMLworkTitle.replace(data, work.jobs[job].role));
				$(".work-entry:last").append(HTMLworkDates.replace(data, work.jobs[job].start +'-'+ work.jobs[job].end));
				$(".work-entry:last").append(HTMLworkLocation.replace(data, work.jobs[job].location));
				$(".work-entry:last").append(HTMLworkDescription.replace(data, work.jobs[job].description));
			}
		}	
	};

	var education = {
		schools: [
			{
				name: "University of Texas at Arlington",
				degree: "Bachelors of Science",
				major: "Software Engineering",
				gpa: 3.3,
				dates: "January 2013-May 2015",
				location: "Arlington, TX"
			},
			{
				name: "Stephen F. Austin State University",
				degree: "Bachelors of Science",
				major: "Physics",
				gpa: 3.2,
				dates: "September 2006-December 2010",
				location: "Nacogdoches, TX"

			}
		],
		online_courses: [
			{
				name: "HTML & CSS",
				school: "Udacity",
				url: "https://www.udacity.com/course/intro-to-html-and-css--ud304",
				dates: "June 2016"
			},
			{
				name: "Beginner Javascript",
				school: "Udacity",
				url: "https://www.udacity.com/course/javascript-basics--ud804",
				dates: "June 2016"
			},
			{
				name: "Intro to Python",
				school: "Udacity",
				url: "https://www.udacity.com/course/programming-foundations-with-python--ud036",
				dates: "July 2016"
			},
			// {
			// 	name: "", school: "", url: "", dates: ""
			// }
		],
		display: function(){
			$("#education").append(HTMLschoolStart);
			for(school in education.schools){
				$(".education-entry").append(HTMLschoolName.replace(data, education.schools[school].name)
						+ HTMLschoolDegree.replace(data, education.schools[school].degree)
						+ HTMLschoolDates.replace(data, education.schools[school].dates)
						+ HTMLschoolMajor.replace(data, education.schools[school].major)
						+ HTMLschoolLocation.replace(data, education.schools[school].location)
					);
			}
			// $(".education-entry").append(HTMLonlineClasses);
			// for(course in education.online_courses){
			// 	$(".education-entry").append(
			// 		HTMLonlineTitle.replace(data, education.online_courses[course].name).replace('#', education.online_courses[course].url)
			// 		+ HTMLonlineSchool.replace(data, education.online_courses[course].school)
			// 		+ HTMLonlineDates.replace(data, education.online_courses[course].dates)
			// 		+ HTMLonlineURL.replace(data, education.online_courses[course].name+' - Course URL').replace('#', education.online_courses[course].url)
			// 	);
			// }
		}
	};
	var projects = {
		projects:[
			{
				name: "Fidelity: Next Generation Call Center (NGCC) Migration", 
				description: "Migrating several Fidelity Client Service Teams, Business Units, and Portfolio Managers to the Next Generation Call Center using the Genesys Platform. Routing calls more accurately based on business rules. Javascript, scxml, Genesys", 
				github: "#", 
				image: ""
			},
			{
				name: "Fidelity: Email Spoofer", 
				description: "An Email Spoofer used for testing email routing in Fidelity's Next Generation Call Center. C# (WPF & .NET)", 
				github: "#", 
				image: ""
			},
			{
				name: "Fidelity: Email Test Automation", 
				description: "A step further from manual email spoofing for Call Center routing tests, using Ruby and Cucumber", 
				github: "#", 
				image: ""
			},
			{
				name: "Fidelity: Genesys Rules Interpreter", 
				description: "Takes in a bulky and user unfriendly xml file and translates it into json and outputs the new business rules into a table with the ability to export to excel. C# (.NET & WPF), HTML, Javascript(JQuery), CSS(Bootstrap)", 
				github: "#", 
				image: ""
			},
			{
				name: "Fidelity: Quote Audit Reporting Tool (QUARTz)", 
				description: "This tool allows analysts to run a wide variety of reports used in both stock exchange audits and market decisions. Java, Spring, SQL, HTML, CSS(Bootstrap), Javascript(JQuery)", 
				github: "#", 
				image: ""
			},
			{
				name: "Fidelity: Buy Local Bonds", 
				description: "Fidelity's Leap Training Casestudy project. Java, Spring, SQL, HTML, CSS, Javascript", 
				github: "#", 
				image: ""
			},
			{
				name: "Lynx Device for the Microsoft PixelSense", 
				description: "The Lynx is a 2 way communication device using an Arduino and an array of LEDs, photodiodes, and a Nexus 5 (C, Java). The Lynx communicated with the Microsoft PixelSense Table (C#), taking commands from both the PixelSense and the Nexus 7 on the Lynx. The demo application was a blackjack game (C#).", 
				github: "https://github.com/brandonDeen/DemoSoftware", 
				image: ""
			},
			{
				name: "Python Packet Sniffer", 
				description: "A packet sniffer built in Python.", 
				github: "https://github.com/brandonDeen/python-packet-sniffer", 
				image: ""
			},
			{
				name: "Android Calendar Application", 
				description: "A simple calendar application that allows the user to create events, event reminders, and shared events. Java", 
				github: "#", 
				image: ""
			},
			{
				name: "DroidMD", 
				description: "An Android application that allows the user to log their diet, add medications with reminders, and alerts the users", 
				github: "#", 
				image: ""
			},
			{
				name: "Angular Resume Page", 
				description: "A resume page utilizing AngularJS. HTML, CSS, Javascript(AngularJS)", 
				github: "https://github.com/brandonDeen/Resume_Angular_App", 
				image: ""
			},
			{
				name: "Portfolio Page", 
				description: "Portfolio page following the Udacity HTML & CSS course",
				github: "https://github.com/brandonDeen/Portfolio_Page",
				image: ""
			},
			{
				name: "Resume Page", 
				description: "Resume page following the Udacity Javascript Beginner course",
				github: "https://github.com/brandonDeen/frontend-nanodegree-resume",
				image: ""
			},
			{
				name: "pyRPG: A Tale in Text", 
				description: "A text based role playing game, that runs in the console. Python, MongoDB", 
				github: "https://github.com/brandonDeen/Text_RPG_Python", 
				image: ""
			},
		],
		
		display: function(){ 
			$("#projects").append(HTMLprojectStart);
			for(project in projects.projects){
				var formattedProject = 
					HTMLprojectTitle.replace(data, projects.projects[project].name).replace('#', projects.projects[project].github) +	
					HTMLprojectDescription.replace(data, projects.projects[project].description) +
					HTMLprojectImage.replace(data, projects.projects[project].image);
				$(".project-entry:last").append(formattedProject); 
			}
		}
	};

/**** add elements with jQuery ******/
function displayMap(){
	$("#mapDiv").append(googleMap);
}

function inName(name){
	name = name.trim().split(' ');
	name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name.join(' ');
}

bio.displayHeader();
work.display();
education.display();
projects.display();
displayMap();
bio.displayFooter();

// $("#main").append(internationalizeButton);










