// Embedded skills data
// Embedded skills data
const skillsData = [
    {"name": "ReactJS", "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"},
    {"name": "ExpressJS", "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"},
    {"name": "NodeJS", "icon": "https://img.icons8.com/color/48/000000/nodejs.png"},
    {"name": "TailwindCSS", "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"},
    {"name": "Bootstrap", "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"},
    {"name": "HTML5", "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"},
    {"name": "CSS3", "icon": "https://img.icons8.com/color/48/000000/css3.png"},
    {"name": "JavaScript", "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"},
    {"name": "Java", "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"},
    {"name": "Python", "icon": "https://img.icons8.com/color/48/000000/python--v1.png"},
    {"name": "C++", "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"},
    {"name": "MongoDB", "icon": "https://img.icons8.com/color/48/000000/mongodb.png"},
    {"name": "MySQL", "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"},
    {"name": "PostgreSQL", "icon": "https://img.icons8.com/color/48/000000/postgreesql.png"},
    {"name": "Git VCS", "icon": "https://img.icons8.com/color/48/000000/git.png"},
    {"name": "GitHub", "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"},
    {"name": "Pandas", "icon": "https://img.icons8.com/color/48/000000/pandas.png"},
    {"name": "AWS", "icon": "https://img.icons8.com/color/48/000000/amazon-web-services.png"},
    {"name": "TensorFlow", "icon": "https://img.icons8.com/color/48/000000/tensorflow.png"},
    {"name": "Scikit-learn", "icon": "https://icon.icepanel.io/Technology/svg/scikit-learn.svg"},
    {"name": "Linux", "icon": "https://img.icons8.com/color/48/000000/linux.png"}
];

// Embedded projects data with lowercase image names and without duplicates
const projectsData = [
    {"name": "Uber Clone", "desc": "Full-featured ride-sharing application clone...", "image": "uberclone", "category": "mern", "links": {"view": "#", "code": "https://github.com/manitejabayya/Uber-Clone"}},
    {"name": "Gemini AI Clone", "desc": "AI-powered conversational interface...", "image": "geminiclone", "category": "mern", "links": {"view": "#", "code": "https://github.com/manitejabayya/Gemini-AI-Clone"}},
    {"name": "Air Quality Checker", "desc": "Real-time air quality monitoring...", "image": "airquality", "category": "webdev", "links": {"view": "#", "code": "https://github.com/manitejabayya/Air_Quality_checker"}},
    {"name": "LandVerse - Real Estate Platform", "desc": "Comprehensive real estate platform...", "image": "landverse", "category": "webdev", "links": {"view": "#", "code": "https://github.com/manitejabayya/LandVerse"}},
    {"name": "Spotify Clone", "desc": "Music streaming application clone...", "image": "spotifyclone", "category": "mern", "links": {"view": "#", "code": "https://github.com/manitejabayya/Spotify-Clone"}},
    {"name": "Dynamic Travello", "desc": "Dynamic travel booking platform...", "image": "travello", "category": "webdev", "links": {"view": "#", "code": "https://github.com/manitejabayya/Dynamic_Travello"}},
    {"name": "Mental Health Chat Bot", "desc": "AI-powered mental health support chatbot...", "image": "mentalhealth", "category": "ml", "links": {"view": "#", "code": "https://github.com/manitejabayya/Mental_health_Chat-Bot"}},
    {"name": "Automatic Sorting System", "desc": "Intelligent automated sorting system...", "image": "autosorting", "category": "ml", "links": {"view": "#", "code": "https://github.com/manitejabayya/automatic_sorting"}},
    {"name": "Heart Disease Prediction", "desc": "Medical AI system for heart disease risk...", "image": "heartdisease", "category": "ml", "links": {"view": "#", "code": "https://github.com/manitejabayya/heart_disease_prediction"}},
    {"name": "Machine Failure Detection", "desc": "Predictive maintenance system...", "image": "machinefailure", "category": "ml", "links": {"view": "#", "code": "https://github.com/manitejabayya/Machine_failure_detection"}},
    {"name": "Iris Classification", "desc": "ML project classifying iris flowers...", "image": "iris", "category": "ml", "links": {"view": "#", "code": "https://github.com/manitejabayya/iris_classification"}},
    {"name": "Movie Recommendation System", "desc": "Personalized movie recommendation engine...", "image": "movierecommend", "category": "ml", "links": {"view": "#", "code": "https://github.com/manitejabayya/movie_recommandition"}},
    {"name": "House Price Prediction Model", "desc": "Real estate valuation using ML...", "image": "houseprice", "category": "ml", "links": {"view": "#", "code": "https://github.com/manitejabayya/house-prediction-model"}},
    {"name": "Basic Jarvis Model", "desc": "Voice-activated AI assistant...", "image": "jarvis", "category": "ml", "links": {"view": "#", "code": "https://github.com/manitejabayya/Ai-tool"}},
    {"name": "Fantasy - Dating Site", "desc": "Modern dating platform with MERN...", "image": "fantasy", "category": "mern", "links": {"view": "#", "code": "#"}},
    {"name": "WensPaper - News Site", "desc": "Dynamic news portal...", "image": "wpaper", "category": "mern", "links": {"view": "#", "code": "#"}},
    {"name": "Istem - Course Marketplace", "desc": "Student-centric academic course platform...", "image": "istem", "category": "mern", "links": {"view": "#", "code": "#"}},
    {"name": "Eagle Coders - Student Community", "desc": "Coding community website...", "image": "students", "category": "mern", "links": {"view": "#", "code": "#"}},
    {"name": "Hubdub - Children's Medicine Site", "desc": "E-commerce for children's medicine...", "image": "habdab", "category": "mern", "links": {"view": "https://habdab.in/", "code": "https://github.com/manitejabayya/HubDub"}},
    {"name": "Child-Study - Educational App", "desc": "React Native educational app...", "image": "mobileapp", "category": "android", "links": {"view": "#", "code": "https://github.com/manitejabayya/Child_Study-App"}}
];


// Embedded projects data (corrected image fields to match case sensitivity)


// Simplified fetchData function using embedded data
function fetchData(type = "skills") {
    return new Promise((resolve, reject) => {
        try {
            let data = type === "skills" ? skillsData : projectsData;
            resolve(data);
        } catch (error) {
            console.error(`Error fetching ${type} data:`, error);
            reject(error);
        }
    });
}

$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50,
        }, 500, 'linear');
    });

    // emailjs to mail contact form data
    $("#contact-form").submit(function (event) {
        emailjs.init("Q9oJ8KinwIctX2yBw");

        emailjs.sendForm('service_m5sjxuk', 'template_7hlpt8h', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
});

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Jahnavi Reddy";
        $("#favicon").attr("href", "assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        // $("#favicon").attr("href", "assets/images/favhand.png");
    }
});

// typed js effect
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "Machine Learning", "Data Science"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src="${skill.icon}" alt="skill" style="width:48px; height:48px;" />
                <span>${skill.name}</span>
              </div>
            </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    // Fallback image - using an online placeholder
    const fallbackImage = "https://via.placeholder.com/300x200";
    console.log("Checking image paths:", projects.map(p => `assets/images/projects/${p.image}.png`)); // Debug log
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        const imageSrc = project.image ? `assets/images/projects/${project.image}.png` : fallbackImage;
        // Add onerror with a flag to prevent infinite loops
        projectHTML += `
        <div class="box tilt">
            <img draggable="false" src="${imageSrc}" alt="${project.name}" onerror="if (!this.getAttribute('data-fallback-applied')) { console.log('Image failed to load: ${imageSrc}'); this.setAttribute('data-fallback-applied', 'true'); this.src='${fallbackImage}'; }" />
            <div class="content">
                <div class="tag">
                    <h3>${project.name}</h3>
                </div>
                <div class="desc">
                    <p>${project.desc}</p>
                    <div class="btns">
                        <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                        <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                    </div>
                </div>
            </div>
        </div>`;
    });
    projectsContainer.innerHTML = projectHTML;

    // tilt js effect
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });

    // scroll reveal animation
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    // scroll projects
    srtop.reveal('.work .box', { interval: 200 });
}

// Load skills and projects
fetchData().then(data => {
    showSkills(data);
}).catch(error => {
    console.error("Failed to load skills:", error);
});

fetchData("projects").then(data => {
    showProjects(data);
}).catch(error => {
    console.error("Failed to load projects:", error);
});

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

Tawk_API.customStyle = {
    visibility: {
        desktop: {
            position: 'bl',
            xOffset: 20,
            yOffset: 20
        },
        mobile: {
            position: 'bl',
            xOffset: 10,
            yOffset: 20
        }
    }
};

(function(){
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/683874bc58576e1911972e48/1ise8g0bf';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

Tawk_API.onLoad = function(){
    setTimeout(function() {
        var customStyles = document.createElement('style');
        customStyles.innerHTML = `
            .tawk-button {
                background-color: #FFD700 !important;
                box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4) !important;
            }
            .tawk-chat-bubble {
                background: linear-gradient(135deg, #FFD700, #FFA500) !important;
            }
        `;
        document.head.appendChild(customStyles);
        
        var tawkElements = document.querySelectorAll('[id*="tawk"]');
        tawkElements.forEach(function(element) {
            element.style.left = '20px';
            element.style.right = 'auto';
        });
    }, 1000);
};

Tawk_API.onChatMaximized = function(){
    setTimeout(function() {
        var tawkFrame = document.querySelector('#tawk-chat-widget-frame');
        if (tawkFrame) {
            tawkFrame.style.left = '20px';
            tawkFrame.style.right = 'auto';
        }
    }, 100);
};

/* SCROLL REVEAL ANIMATION */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });

/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400});