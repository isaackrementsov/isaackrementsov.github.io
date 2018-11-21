var skills = document.getElementsByClassName("stat");
var pM = document.getElementsByClassName('project-med');
var pS = document.getElementsByClassName('project-sm');
var pL = document.getElementsByClassName('lg');
var gs = document.getElementsByClassName('class');
var ss = document.getElementsByClassName('s');
var h = document.getElementById('topheading');
/*kokosole, advance, condevchat, ica, bridge, imgupload, 
github3, urban-infrastructure, chat sockets, chat websockets,
chat websockets-advanced, spotify-busking-prototype*/
var loc = 3102 + 943 + 3000 + 728 + 743 + 510 + 1216 + 283 + 52 + 138 + 284 + 798;
var projects = 8;
var languages = 12;
var scrolled = false;
fixHeader();
for(let i = 0; i < gs.length; i++){
    gs[i].addEventListener('mouseover', function(){
        var style = window.getComputedStyle(this, null);
        var width = style.getPropertyValue('width');
        this.style.minWidth = width;
        toggleHidden(this);
    });
    gs[i].addEventListener('mouseout', function(){
        toggleHidden(this);
    });
}
for(let i = 0; i < ss.length; i++){
    ss[i]
}
for(let i = 0; i < skills.length; i++){
    skills[i].addEventListener('mouseover', function(){
        skills[i].children[0].style.display = 'block';
        skills[i].children[1].style.display = 'none';
    });
    skills[i].addEventListener('mouseout', function(){
        skills[i].children[0].style.display = 'none';
        skills[i].children[1].style.display = 'inline-block';
    });
}
for(let i = 0; i < pM.length; i++){
    let o = -60;
    let p = -39;
    pM[i].addEventListener('mouseover', function(){
        if(pM[i].innerHTML.includes('ICA')){
            openAndShift(178, p, 'title', 'project-icons', i + pS.length + pL.length);
        }else{
            openAndShift(o, p, 'title', 'project-icons', i + pS.length + pL.length);
        }
    });
    pM[i].addEventListener('mouseout', function(){
        if(pM[i].innerHTML.includes('ICA')){
            openAndShift(178, 39, 'title', 'project-icons', i + pS.length + pL.length);
        }else{
            openAndShift(o, p, 'title', 'project-icons', i + pS.length + pL.length);
        }
    });
}
for(let i = 0; i < pS.length; i++){
    let o = -50;
    let p = -30;
    pS[i].addEventListener('mouseover', function(){
        openAndShift(o, p, 'title', 'project-icons', i + pL.length);
    });
    pS[i].addEventListener('mouseout', function(){
        openAndShift(o, p, 'title', 'project-icons', i + pL.length);
    });
}
for(let i = 0; i < pL.length; i++){
    let o = -70;
    let p = -37;
    pL[i].addEventListener('mouseover', function(){
        openAndShift(o, p, 'title', 'project-icons', i);
    });
    pL[i].addEventListener('mouseout', function(){
        openAndShift(o, p, 'title', 'project-icons', i);
    });
}
function fixHeader(){
    if(window.innerWidth < 900){
        document.getElementById('topheading').innerHTML = '';
    }
}
function startCounting(){
    var count = 0;
    var timer = setInterval(function(){
        if(count >= loc){
            clearInterval(timer);
        }
        ss[0].innerHTML = count;
        count += 52;
    }, 0.1);
    var count2 = 0;
    var timer2 = setInterval(function(){
        if(count2 >= projects){
            clearInterval(timer2);
        }
        ss[1].innerHTML = count2;
        count2++;
    }, 100);
    var count3 = 0;
    var timer3 = setInterval(function(){
        if(count3 >= languages){
            clearInterval(timer3);
        }
        ss[2].innerHTML = count3;
        count3++;
    }, 70);
}
function toggleHidden(elem){
    txt = elem.innerHTML;
    elem.innerHTML = elem.getAttributeNode('hidden').value;
    elem.setAttribute('hidden', txt);
}
function openAndShift(or, px, cls, cls2, i){
    var divs2 = document.getElementsByClassName(cls);
    var divs = document.getElementsByClassName(cls2);
    let display = window.getComputedStyle(divs[i], null).getPropertyValue('display');
    if(display == 'none'){
        divs[i].style.display = 'block';
        divs2[i].style.marginTop = or + px + 'px';
    }else{
        divs[i].style.display = 'none';
        divs2[i].style.marginTop = or + 'px';
    }
}
function opendiv(id, fade){
    var div = document.getElementById(id);
    if(div.style.display == 'none'){
        if(fade){
            div.style.display = 'block';
            div.style.opacity = 1;           
        }else{
            div.style.display = 'block'
        }
    }else{
        if(fade){
            div.style.opacity = 0;
            div.style.display = 'none'
        }else{
            div.style.display = 'none'
        }
    }
}
function openclass(cls){
    var divs = document.getElementsByClassName(cls);
    for(let i = 0; i < divs.length; i++){
        let display = window.getComputedStyle(divs[i], null).getPropertyValue('display');
        if(display == 'none'){
            divs[i].style.display = 'block';
        }else{
            divs[i].style.display = 'none';
        }
    }
}
function scrolltodiv(id){
    var div = document.getElementById(id);
    var navbar = document.getElementById('navbar');
    document.getElementById(id).scrollIntoView()
    window.scrollBy(0, -navbar.offsetHeight)
}
function showMore(){
    opendiv('project-lg');
    openclass('project-sm-gallery');
    openclass('hidden');
    var div = document.getElementById('see-more');
    var txt = div.innerHTML;
    if(txt.includes('See more')){
        div.innerHTML = '<h2>See less</h2>';
    }else{
        div.innerHTML = '<h2>See more</h2>';
    }
}
window.onscroll = function(){
    var navbar = document.getElementById('navbar');
    var img = document.getElementById('profile');
    fixHeader();
    img.setAttribute('src', 'assets/img/logo.png');
    navbar.className = 'navbar';
    if(window.scrollY == 0){
        navbar.className = 'navbar navbar-initial';
        img.setAttribute('src', 'assets/img/logo-white.png');
        h.innerHTML = '';
    }
    var ht = ss[0].getBoundingClientRect().top;
    if(ht < window.innerHeight && ht > -10){
        if(!scrolled){
            startCounting();
            scrolled = true;
        }
    }
}
window.onresize = function(){
    fixHeader();
}