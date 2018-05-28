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
function scrolltodiv(id){
    var div = document.getElementById(id);
    var navbar = document.getElementById('navbar');
    document.getElementById(id).scrollIntoView()
    window.scrollBy(0, -navbar.offsetHeight)
}