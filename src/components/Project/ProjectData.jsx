// src/projectsData.js
const projectsData = [
    {
        "id": 1,
        "title": "Todo App",
        "keys": ["React"],
        "description": "The React To-Do app allows users to add tasks that are temporarily stored, providing an interactive way to manage their to-do list, but the data is not persisted beyond the current session.",
        "category": ["JS","Web"],
        "image": `${process.env.PUBLIC_URL}/assets/todo.png`,
        "git": "https://github.com/c-abhijith/Todo-APP.git",
        "web": "https://c-abhijith.github.io/Todo-App/",
        "video":"https://github.com/c-abhijith/Todo-App.git"
    },
    {
        "id": 2,
        "title": "Draw",
        "keys": ["Flask", "JS", "Bootstrap"],
        "description": "This is a Flask template project that integrates PostgreSQL for backend operations, with dynamic image rendering of a 'draw' image. It uses Flask templates to serve content efficiently while managing user data through a PostgreSQL database.",
        "category": ["Python","Web"],
        "image": `${process.env.PUBLIC_URL}/assets/draw.png`,
        "git": "https://github.com/c-abhijith/Draw.git",
        "web": "https://draw-git-main-abhis-projects-a823021e.vercel.app/",
        "video":""
    }, 
    {
        "id": 3,
        "title": "Chat",
        "keys": ["Django", "JS", "WebSockets"],
        "description": "The Django chat room application uses WebSockets for real-time communication, allowing users to join chat rooms, send and receive messages instantly. The template dynamically updates the chat interface as messages are exchanged, creating an interactive and responsive chat experience.",
        "category": ["Python","Web"],
        "image": `${process.env.PUBLIC_URL}/assets/chat.png`,
        "git": "https://github.com/c-abhijith/Chat_App-DTL-.git",
        "web": "https://chat-app-dtl.onrender.com/",
        "video":""
    }
    ,
    {
        "id": 4,
        "title": "Ogle",
        "keys": ["Python", "Django", "SQL"],
        "description": "In my latest e-commerce project, I created a platform with Admin and User roles, secure OTP validation, and reporting in Excel and PDF formats. The system also integrates PayPal for seamless transactions, demonstrating my ability to deliver complex, user-centric solutions with robust security and reporting features.",
        "category": ["Python"],
        "image": `${process.env.PUBLIC_URL}/assets/ogle.png`,        
        "git": "https://github.com/c-abhijith/OgleHosting.git",
        "web": "https://youtu.be/Q1fKqazATtc?si=Xnjk9hE0LGP9P_SE"
    },
    {
        "id": 5,
        "title": "Zwast",
        "keys": ["React", "Django", "Postgres"],
        "description": "In my waste management project, I built a platform with React and Django REST Framework (DRF), featuring JWT authentication, interactive React maps, and payment options via PayPal and Razorpay. This project showcases my skills in integrating modern technologies for improved functionality and user experience.",
        "category": ["JS", "Python"],
        "image": `${process.env.PUBLIC_URL}/assets/zwast.png`, 
        "git": "https://github.com/c-abhijith/Zwaste-BackEnd.git",
        "web": "https://youtu.be/ndbB3nIJwH8?si=KE_164j6IO_J7u-C"
    },
    {
        "id": 6,
        "title": "Recommendation System",
        "keys": ["ML", "Streamlit", "Pandas"],
        "description": "This machine learning project is a Recommendation System built using NumPy, Pandas, scikit-learn, and deployed with Streamlit for an interactive web interface. It analyzes user preferences and item features to provide personalized suggestions. The system leverages techniques like collaborative filtering and content-based filtering, making it efficient and user-friendly for real-time recommendations.",
        "category": ["Python", "ML"],
        "image": `${process.env.PUBLIC_URL}/assets/todo.png`,
        "git": "https://github.com/c-abhijith/Todo-APP.git",
        "web": "https://c-abhijith.github.io/Todo-App/",
        "video":""
    },
    {
        "id": 7,
        "title": "EchoBlog",
        "keys": ["Fast API", "React", "Tailwindcss"],
        "description": "This machine learning project is a Recommendation System built using NumPy, Pandas, scikit-learn, and deployed with Streamlit for an interactive web interface. It analyzes user preferences and item features to provide personalized suggestions. The system leverages techniques like collaborative filtering and content-based filtering, making it efficient and user-friendly for real-time recommendations.",
        "category": ["Python", "js"],
        "image": `${process.env.PUBLIC_URL}/assets/todo.png`,
        "git": "https://github.com/c-abhijith/Todo-APP.git",
        "web": "https://c-abhijith.github.io/Todo-App/",
        "video":""
    }
  ]
  
  export default projectsData;
  