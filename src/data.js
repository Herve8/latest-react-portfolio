import '../src/index.css';
export default
    {
        
        name :'Herve Malvina',
        headerTagline: [
            
                        'My name  is Herve Malvina.',
                        'I have just complete a bootcamp for full stack web developer',
                        'from University of Western Australia'
                        
    ],
        contactEmail:'hmalvina@yahoo.com',
        resume: "./Resume.zip",
        abouttext: "I have a passion for programming and web designing. This course has provided me with invaluable skills and the right baggage to become a Full  Stack Web Developer",
        aboutImage:'./me.png ',
       ShowAboutImage:true,
 
       projects:[
        {
            id: 1,
            title: 'Burger-app',
            service: 'An app that allows users to input the names of bugers and also delete selected burgers',
            imageSrc: "./burger-app.png",
            url: 'https://github.com/Herve8/burger-app'
        },
        {
            id: 2,
            title: 'Note taker',
            service: 'Creating an application called Note Taker that can be used to write and save notes',
            imageSrc: "./Notetaker.gif",
            url: 'https://github.com/Herve8/Note-Taker'
        },

           {
            id: 3,
            title:'Password Generator', 
             service:'A random password generator application has been developed using javascript.', 
             imageSrc:"./Password-generator-form.png",
             url:'https://github.com/Herve8/random-password-generator-form/'
            },
            {
                id: 4,
                title: 'Workout tracker',
                service: 'A workout  tracker app that allows a user to be able to view create and track daily workouts',
                imageSrc: "./workout-tracker.gif",
                url: 'https://github.com/Herve8/workout-tracker'
            },
            { 
                id: 5,
                title: 'Google book serach',
                service: 'A React-based Google Books Search app, created from React components,  that querries and displays google books based on user searches',
                imageSrc: "./books.jpeg",
                url: 'https://github.com/Herve8/google-book-search'
            },
            {
                id: 6,
                title: 'Project-1 - Music Event Planner',
                service: 'A simple event music planner app that searches for an artist name, finds information about the artist, and saves any upcoming musical events scheduled for that artist.', 
                imageSrc: "./project1.png",
                url: 'https://github.com/Herve8/Project-1/'
           },
           {
            id: 7,
            title: 'Project2 - Together We Can',
            service: 'A web application built to meet the challenges elderly & disabled people face, especially during the COVID-19 pandemic.',
            imageSrc: "./project2.png",
            url: 'https://github.com/Herve8/Project-2/'
       }        
               
        ],
        social: [

            {   name:'Github',
                url:'https://github.com/Herve8'},
            {
                name: 'Linkedin',
                url: 'https://www.linkedin.com/in/herve-malvina-098086a7/'
            },
          

        ]
    }