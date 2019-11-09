/*kokosole, advance, condev, devchat, ica, bridge, imgupload,
github3, urban-infrastructure, chat sockets, chat websockets,
chat websockets-advanced, spotify-busking-prototype, business-law-jeopardy,
mlhub, mlhub-desktop, virtual-trader, cheflyfe, driving, driving-client, robohawks-api*/
var lines = 3102 + 943 + 1664 + 1670 + 728 + 743 + 510 + 1216 + 283 + 52 + 138 + 284 + 798 + 577 + 1189 + 887 + 408 + 9750 + 232 + 1114 + 389;
var linesScrolled = false;
var projects = 10;
var projectScrolled = false;
var languages = 13;
var languagesScrolled = false;

function toggleColors(){
    $('.navbar').toggleClass('bg-dark navbar-dark', 'bg-light navbar-light');
    $('body').toggleClass('bg-dark container-dark');
}

function elementScrolled(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
}

$('.skills li').click(function(){
    $(this).find('span').toggle(200);
});

$(window).scroll(function(){
    if(elementScrolled('#lines') && !linesScrolled){
        let i = 0;
        linesScrolled = true;

        let id = setInterval(() => {
            if(i < lines){
                i += 101;
                $('#lines').html(i);
            }else{
                clearInterval(id);
            }
        }, 0.1);
    }

    if(elementScrolled('#projects') && !projectScrolled){
        let i = 0;
        projectScrolled = true;

        let id = setInterval(() => {
            if(i < projects){
                i += 1;
                $('#projects').html(i);
            }else{
                clearInterval(id);
            }
        }, 100);
    }

    if(elementScrolled('#languages') && !languagesScrolled){
        let i = 0;
        languagesScrolled = true;

        let id = setInterval(() => {
            if(i < languages){
                i += 1;
                $('#languages').html(i);
            }else{
                clearInterval(id);
            }
        }, 100);
    }
});
