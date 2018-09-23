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
    var divs = document.getElementById(cls);
    if(divs[0].style.display == 'none'){
        for(let i = 0; i < divs.length; i++){
            divs[i].style.display = 'block'
        }
    }else{
        for(let i = 0; i < divs.length; i++){
            divs[i].style.display = 'none'
        }
    }
}
function scrolltodiv(id){
    var div = document.getElementById(id);
    var navbar = document.getElementById('navbar');
    document.getElementById(id).scrollIntoView()
    window.scrollBy(0, -navbar.offsetHeight)
}
window.onscroll = function(){
    var navbar = document.getElementById('navbar');
    navbar.style.backgroundColor = 'white';
    navbar.style.color = 'black';
    navbar.style.top = 0;
    if(window.scrollY == 0){
        navbar.style.top = '2vh';
        navbar.style.color = 'rgba(255,255,255,0.7)';
        navbar.style.backgroundColor = 'transparent'
    }
}
window.onload = function(){
    var clss = document.getElementsByClassName("class");
    for(let i = 0; i < clss.length; i++){
        clss[i].addEventListener('mouseover', function(){
            txt = clss[i].innerHTML;
            clss[i].style.minWidth = (clss[i].offsetWidth - 29 ) + "px";
            clss[i].innerHTML = clss[i].getAttribute("hidden");
            clss[i].setAttribute("hidden", txt)
        });
        clss[i].addEventListener('mouseout', function(){
            txt = clss[i].innerHTML;
            clss[i].innerHTML = clss[i].getAttribute("hidden");
            clss[i].setAttribute("hidden", txt)
        })
    }
}