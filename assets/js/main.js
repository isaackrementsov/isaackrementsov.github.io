const skills = [
    {title: 'HTML & CSS', logo: 'fab fa-html5', pct: 80},
    {title: 'NodeJS and Express', logo: 'fab fa-node-js', pct: 75},
    {title: 'MongoDB', logo: 'fas fa-database', pct: 45},
    {title: 'Java', logo: 'fab fa-java', pct: 65},
    {title: 'Javascript', logo: 'fab fa-js', pct: 75},
    {title: 'GoLang', logo: 'fab fa-google', pct: 35},
    {title: 'SQL', logo: 'fas fa-server', pct: 60},
    {title: 'React & React Native', logo: 'fab fa-react', pct: 60},
    {title: 'Electron', logo: 'fas fa-atom', pct: 55},
    {title: 'Git', logo: 'fab fa-git-square', pct: 65},
    {title: 'Flutter & Dart', logo: 'fas fa-mobile', pct: 45},
    {title: 'Python & Flask', logo: 'fab fa-python', pct: 80},
    {title: 'Machine Learning', logo: 'fas fa-brain', pct: 35}
];

const certifications = [
    {link: 'https://www.testdome.com/cert/ff71c33415794c41ba09c6711e3cca18', title: 'Java', agency: 'TestDome'},
    {link: 'https://www.testdome.com/cert/986bf0916a8a43f7a492b41cc04cac39', title: 'JavaScript', agency: 'TestDome'},
    {link: 'https://www.testdome.com/cert/0bf26bbb5599496a86c4cec4231d1158', title: 'JavaScript & NodeJS', agency: 'TestDome'},
    {link: 'https://www.testdome.com/cert/56b82662ff6245a6b802e600a4bfe5fe', title: 'Java & SQL', agency: 'TestDome'},
];

const projectsObj = [
    {
        title: 'ChefLyfe',
        subtitle: 'Recipe, Menu & Ingredient Manager',
        pageLink: 'https://cheflyfe.com',
        ghLink: 'https://github.com/isaackrementsov/cheflyfe',
        pictures: ['cheflyfe.png'],
        categories: ['full-stack']
    },
    {
        title: 'Kokosole',
        subtitle: 'Travel Networking Application',
        pageLink: null,
        ghLink: 'https://github.com/isaackrementsov/kokosole',
        pictures: ['kokosole.png'],
        categories: ['full-stack']
    },
    {
        title: 'Wise Body Wellness',
        subtitle: 'Wellness Coaching Portfolio',
        pageLink: null,
        ghLink: 'https://github.com/isaackrementsov/annieellis_website',
        pictures: ['wisebody.png'],
        categories: ['frontend']
    },
    {
        title: 'Advance Java',
        subtitle: 'Java HTTP Framework',
        pageLink: 'https://isaackrementsov.github.io/advance-java',
        ghLink: 'https://github.com/isaackrementsov/advance-java',
        pictures: ['advance-java.png'],
        categories: ['backend']
    },
    {
        title: 'Sound Portrait',
        hide: true,
        subtitle: 'Converts Image Pixels to Audio',
        pageLink: null,
        ghLink: 'https://github.com/isaackrementsov/image-to-sound',
        pictures: ['sound-portrait.png'],
        categories: ['backend']
    },
    {
        title: 'ODE Calculator',
        subtitle: 'Differential Equation Grapher',
        pageLink: 'http://odecalculator.pythonanywhere.com/',
        ghLink: 'https://github.com/isaackrementsov-edu/ode-calculator',
        pictures: ['ode-calculator.png'],
        categories: ['full-stack']
    },
    {
        title: 'MlHub',
        subtitle: 'Machine Learning Algorithm & Platform',
        pageLink: null,
        ghLink: ['https://github.com/isaackrementsov/mlhub', 'https://github.com/isaackrementsov/mlhub-desktop'],
        pictures: ['mlhub.png'],
        categories: ['native', 'full-stack']
    },
    {
        title: 'ICA Works',
        subtitle: 'Architecture Portfolio Site',
        pageLink: null,
        ghLink: 'https://github.com/isaackrementsov/ica',
        pictures: ['ica.png'],
        categories: ['frontend']
    },
    {
        title: 'DevChat',
        subtitle: 'Project Management Platform',
        pageLink: null,
        ghLink: 'https://github.com/isaackrementsov/condevchat',
        pictures: ['devchat.png'],
        categories: ['full-stack']
    },
    {
        title: 'ConDev',
        subtitle: 'Job Search Platform',
        pageLink: null,
        ghLink: 'https://github.com/isaackrementsov/condevchat',
        pictures: ['condev.png'],
        categories: ['full-stack']
    },
    {
        title: 'Bridge',
        subtitle: 'GoLang HTTP Project',
        pageLink: null,
        ghLink: 'https://github.com/isaackrementsov/bridge',
        pictures: ['bridge.png'],
        categories: ['full-stack']
    },
    {
        title: 'RideShare',
        subtitle: 'Carpooling Charge Tracker',
        pageLink: 'http://rideshare.us.to',
        ghLink: 'https://github.com/isaackrementsov/rideshare',
        pictures: ['rideShare.png'],
        categories: ['full-stack']
    },
    {
        title: 'Server Portal',
        hide: true,
        subtitle: 'File Portal for a Personal Server',
        pageLink: null,
        ghLink: 'https://github.com/isaackrementsov/Imgupload',
        pictures: ['server.jfif'],
        categories: ['full-stack']
    },
];

const jobs = [
    {
        company: 'Fiverr.com/Independent',
        icon: 'assets/img/fiverr.png',
        title: 'Freelance Web Developer',
        dates: ['Sep 2018', 'Present'],
        bullets: [
            'Completed 13 software development projects for clients obtained through Fiverr.com and independent networking',
            'Maintained a 5-star rating on Fiverr.com',
            'Technologies used include NodeJS, React, Jinja2, Python/Flask, SQL, Java, and Freemarker',
            'Features built include real-time chats, automated messaging services, interactive charts, and complex databases'
        ]
    },
    {
        company: 'Access CVU',
        icon: 'assets/img/access.png',
        title: 'Technology Tutor and Teacher',
        dates: ['Feb 2018', 'Present'],
        bullets: [
            'Prepared course materials such as presentations, homework assignments, and handouts',
            'Taught classes covering database programming, web development, Java, and social media management',
            'Tutored adults to work through technical issues'
        ]
    },
    {
        company: 'Young Hacks Academy',
        icon: 'assets/img/yha.jpeg',
        title: 'Junior Instructor',
        dates: ['Jul 2019'],
        bullets: [
            'Prepared course materials such as presentations, homework assignments, and handouts',
            'Taught classes covering database programming, web development, Java, and social media management',
            'Tutored adults to work through technical issues'
        ]
    }
];

const educations = [
    {
        school: 'CVU High School',
        icon: 'assets/img/CVU-logo.png',
        place: 'Hinesburg, VT',
        dates: ['Sep 2017', 'Jun 2021'],
        bullets: [
            '4.28 GPA (as of February 2021)',
            "Lead programmer for CVU's FIRST Tech Challenge Team (RoboHawks, #5741)",
            'Club organizer for Computer Club and participant in 2018-2020 CyberPatriot & 2019 PACTF Competitions',
            'Ranked in the top 20 northern Vermont Math League participants for 2020-21 season',
            "Varsity member of Scholar's Bowl Team, ranking 9th among all scorers since 2001"
        ]
    }
];

const lines = 39970;
let scrolled = {
    skills: false,
    certifications: false,
    projects: false,
    lines: false,
    projects: false,
    languages: false
}
const projects = projectsObj.length;
let imagesLoaded = 0;
let imagesToShow = projectsObj.filter(p => !p.hide).length;
const languages = 13;
const skillsPerCol = 7;
let currentCategory = 'frontend';
let darkMode = false;

function init(){

    addSkills();
    addCertifications();
    addProjects();
    addJobs();
    addEducations();

    sortProjects('frontend');
    addAllEventListeners();
}

function addAllEventListeners(){

    window.onload = function(){
        checkScrolled();
    }

    $(window).scroll(function(){
        checkScrolled();
    });

}

function checkScrolled(){
    const countingTime = 1000;

    if(elementScrolled('#lines') && !scrolled.lines){
        let i = 0;
        const refreshTime = 20;
        const increment = Math.ceil(lines/countingTime*refreshTime)
        scrolled.lines = true;

        let id = setInterval(() => {
            if(i + increment < lines){
                i += increment;
                $('#lines').html(i);
            }else{
                clearInterval(id);
            }
        }, refreshTime);
    }

    if(elementScrolled('#projects') && !scrolled.projects){
        let i = 0;

        const refreshTime = 100;
        const increment = Math.ceil(projects/countingTime*refreshTime)
        scrolled.projects = true;

        let id = setInterval(() => {
            if(i < projects){
                i += increment;
                $('#projects').html(i);
            }else{
                clearInterval(id);
            }
        }, refreshTime);
    }

    if(elementScrolled('#languages') && !scrolled.languages){
        let i = 0;

        const refreshTime = 100;
        const increment = Math.ceil(languages/countingTime*refreshTime);
        scrolled.languages = true;

        let id = setInterval(() => {
            if(i < languages){
                i += increment;
                $('#languages').html(i);
            }else{
                clearInterval(id);
            }
        }, refreshTime);
    }

    if((elementScrolled('#skills-row') || elementScrolled('#certifications')) && !scrolled.skills){
        scrolled.skills = true;
        animateSkills();
    }

    if(elementScrolled('#cert-row') && !scrolled.certifications){
        scrolled.certifications = true;
        animateCertifications();
    }
}

function addSkills(){
    for(let i = 0; i < skills.length; i++){
        let skill = skills[i];
        let skillHtml =
            `<li id="skill-li-${i}" onclick="showSpan('skill-li-${i}')">
                <i class="${skill.logo}"></i>
                <span>${skill.title}</span>
                <div class="bar">
                    <div class="fill" style="width: 0%"></div>
                </div>
            </li>`
        ;

        if(i < skillsPerCol){
            $('#skills-row .col-md-6:first-child ul.skills').append(skillHtml);
        }else{
            $('#skills-row .col-md-6:last-child ul.skills').append(skillHtml);
        }
    }
}

function addEducations(){
    for(let i = 0; i < educations.length; i++){
        education = educations[i];

        let educationHtml =
            `<div class="job">
                <h4><img src="${education.icon}"/><span>${education.school}</span></h4>
                <div class="job-header"><span>${education.dates.join(' &mdash; ')}</span></div>
                <h6>${education.place}</h6>
                <ul>
                    ${education.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
            </div>`
        ;

        $('#educations').append(educationHtml);
    }
}

function addJobs(){
    for(let i = 0; i < jobs.length; i++){
        let job = jobs[i];

        let jobHtml =
            `<div class="job">
                <h4><img src="${job.icon}"/><span>${job.company}</span></h4>
                <div class="job-header"><h5>${job.title}</h5><span>${job.dates.join(' &mdash; ')}</span></div>
                <ul>
                    ${job.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
            </div>`
        ;

        if(i != jobs.length - 1){
            jobHtml += `<hr/>`
        }

        $('#jobs').append(jobHtml)
    }
}

function addCertifications(){
    for(let i = 0; i < certifications.length; i++){
        let certification = certifications[i];
        let certificationHtml =
            `<div class="card" id="cert-card-${i}">
                <span><h4>${certification.title}</h4><a href="${certification.link}"><i class="far fa-check-circle"></i></a></span>
                <p>${certification.agency}</p>
            </div>`
        ;

        $('#cert-row').append(certificationHtml);
    }
}

function addProjects(){
    projectsObj.forEach((project, i) => {
        if(!project.hide){
            let imgSrc = 'assets/img/' + project.pictures[0];
            let img = new Image();

            img.src = imgSrc;
            $(img).on('load', function(){
                imagesLoaded++;
                let height = 230;
                let width =  img.width/img.height*height;

                projectHtml =
                    `<div
                        class="card shadow all ${project.categories.join(' ')}"
                        id="project-card-${i}"
                        style="background-image: url('${imgSrc}'); width: ${width}px; height: ${height}px; display: ${project.categories.indexOf(currentCategory) != -1 ? 'inherit' : 'none'}"
                        onmouseenter="showCover('project-card-${i}')" onmouseleave="hideCover('project-card-${i}')"
                    >
                        <div class="row cover">
                            <h1>${project.title}</h1>
                            <h3>${project.subtitle}</h3>
                            <div class="links">
                                ${project.ghLink ? `<a href="${project.ghLink}"><i class="fab fa-github"></i></a>` : ''}
                                ${project.pageLink ? `<a href="${project.pageLink}"><i class="far fa-eye"></i></a>` : ''}
                            </div>
                        </div>
                    </div>`
                ;

                $('#projects-container').append(projectHtml);
            });
        }
    });
}

function sortProjects(category){
    currentCategory = category;

    $('#projects-container .card').hide(500);
    $('#projects-container .card.' + category).show(700);
    $('.projects-nav button.active').removeClass('active');
    $('.projects-nav button#' + category).addClass('active');
}

function animateCertifications(){
    for(let i = 0; i < certifications.length; i++){
        $(`#cert-card-${i} > *`).animate({opacity: 1}, 1000);
    }
}

function animateSkills(){
    $('#book-logo').animate({opacity: 1}, 500);
    for(let i = 0; i < skills.length; i++){
        $(`#skill-li-${i} .bar .fill`).animate({width: skills[i].pct + '%'}, 1000, 'swing');
    }
}

function showCover(id){
    $(`#${id} .row.cover`).animate({width: '100%'}, {queue: false}, 300, 'swing');
    $(`#${id} .row.cover > *`).show(300, function(){
        $(this).clearQueue();
    });
}

function hideCover(id){
    $(`#${id} .row.cover`).animate({width: '0%'}, {queue: false}, 300, 'swing');
    $(`#${id} .row.cover > *`).hide(50);
}

function showSpan(id){
    $('#' + id).find('span').toggle(200);
}

function toggleColors(){
    $('.navbar').toggleClass('bg-dark navbar-dark', 'bg-light navbar-light');
    $('body').toggleClass('bg-dark container-dark');
    $('#moon-icon').toggleClass('fa-sun fa-moon');
    darkMode = !darkMode;
    sessionStorage.setItem('darkMode', darkMode);
}

function elementScrolled(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
}

if(sessionStorage.getItem('darkMode') == 'true'){
    $('#customSwitch1').prop('checked', true);
    toggleColors();
}

init();
