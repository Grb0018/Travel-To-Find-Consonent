var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;
const okk = document.getElementById('body');    
const o = 0; 
const pic = ['words/a.png','words/c.png','words/c.png','words/e.png','words/s.png','words/i.png','words/o.png','words/s.png','words/s.png'] 
function mm(){document.getElementById('mm').play();document.getElementById('mm').volume = 0.4}
function rkt(){document.getElementById('rocket').play();document.getElementById('rocket').volume = 0.001} 
function bg(){document.getElementById('bgmusic').play();document.getElementById('bgmusic').volume = 1}   
function Re (){
    let o = parseInt(document.getElementById('no').innerHTML);
    let oo = o - 1;
    document.getElementById('no').innerHTML = oo;
    document.getElementById('lf').innerHTML = (parseInt(document.getElementById('lf').innerHTML) + 1);
}               
function crt(){
    if(document.getElementById('full').innerHTML==='0'){
    openFullscreen();}
    mm();
    rkt();
    bg();
    if(parseInt(document.getElementById('wordcount').innerText) < 9){
    document.getElementById('start').style.display = 'none';
    var pc = pic[Math.floor(Math.random()*9)] 
    let a = document.createElement('a');
    let x = Math.floor(Math.random()*window.innerWidth);
    let y = Math.floor(Math.random()*80);
    if(y < 50){
        var xx = 'left :' + x + 'px; width:' + 50 + 'px;' + 'background-image:url(' + pc +');background-size:100% 100%;height:' + 50 + 'px;'
    }else{
        var xx = 'left :' + x + 'px; width:' + y + 'px;' + 'background-image:url(' + pc +');background-size:100% 100%;height:' + y + 'px;'
    }
    document.getElementById('body').appendChild(a)
    a.setAttribute('id','block')
    a.setAttribute('style',xx)
    document.getElementById('wordcount').innerText = parseInt(document.getElementById('wordcount').innerText) + 1 ;
 }
    
setTimeout(crt,1000);    
}
document.addEventListener('keydown', function(e) {
 
    setTimeout(function(){document.getElementById('rocket1').play();},500)
var elem = document.getElementById("main");
var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("left");
var theCSSpropUp = window.getComputedStyle(elem, null).getPropertyValue("top"); 
    var l = ((parseInt(theCSSprop))-18.5) + 'px'
    var r = ((parseInt(theCSSprop))+18.5) + 'px'
    var u = ((parseInt(theCSSpropUp))-18.5) + 'px'
    var d = ((parseInt(theCSSpropUp))+18.5) + 'px'
    switch (e.keyCode) {
        case 37:
            document.getElementById('main').style.left= l
            break;
        case 38:
            document.getElementById('main').style.top= u
            break;
        case 39:
            document.getElementById('main').style.left= r
            break;
        case 40:
            document.getElementById('main').style.top= d
            break;
    }
});
function find(){
var elem = document.getElementById("main");
var block = document.querySelectorAll('a')
var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("left");
var theCSSpropUp = window.getComputedStyle(elem, null).getPropertyValue("top");
var scr = document.getElementById('no').innerHTML;  
    for(let i=0;i<block.length;i++){
        
        var width = parseInt(window.getComputedStyle(block[i], null).getPropertyValue("width"));
        var height = parseInt(window.getComputedStyle(block[i], null).getPropertyValue("height"));
        var bPosition = ((parseInt(window.getComputedStyle(block[i], null).getPropertyValue("top")))+20)
        var bPositionLeft = ((parseInt(window.getComputedStyle(block[i], null).getPropertyValue("left"))))
        var e = (bPositionLeft) - (parseInt(theCSSprop))
        var f= (bPosition) -  (parseInt(theCSSpropUp))
        if( e > -width ){
            if(e < width){
                if(f > -height ){  
                    document.getElementById('wordcount').innerText = parseInt(document.getElementById('wordcount').innerText) - 1;
                    crt()
                    if(block[i].style.backgroundImage === 'url("words/c.png")' || block[i].style.backgroundImage === 'url("words/s.png")'){
                        Re ();
                        document.getElementById('good').style.display = 'block';
                        document.getElementById('main').style.transform = 'scale(1.1)';
                        setTimeout(function (){document.getElementById('good').style.display = 'none';},1200)
                        document.getElementById('levelUp').play()
                        document.getElementById('body').style.animation = 'alertGood 1500 linear';
                        setTimeout(function (){document.getElementById('main').style.transform = 'scale(1)';},900)
                        if(document.getElementById('no').innerHTML === '8'){
                            document.getElementById('life1').style.backgroundImage = 'url(STAR.png)';
                            document.getElementById('block').style.animation = 'animate 2800ms linear infinite;'
                        }
                        if(document.getElementById('no').innerHTML === '4'){
                            document.getElementById('life2').style.backgroundImage = 'url(STAR.png)';block
                            document.getElementById('block').style.animation = 'animate 2300ms linear infinite;'

                        }
                        if(document.getElementById('no').innerText === '0'){
                            document.getElementById('life3').style.backgroundImage = 'url(STAR.png)';
                            setTimeout(function(){document.getElementById('win').style.display = 'flex';
                            document.getElementById('no').innerHTML = o;
                            document.getElementById('main').style.display = 'none';},1500)
                            document.getElementById('winsound').play();
                        }  
                       
                    }
                    else{
                    if(document.getElementById('lll').innerHTML === '0'){  
                        document.getElementById('push').volume =0.4;
                        document.getElementById('push').play();
                        document.getElementById('lll').innerHTML = 'op' ;
                        document.getElementById('main').style.animation = 'shak 1000ms ';
                        document.getElementById('warn').style.display = 'block';
                        document.getElementById('alert').play();
                        setTimeout(function (){document.getElementById('warn').style.display = 'none';},1200)
                        setTimeout(function (){document.getElementById('main').style.animation = 'none';},1000)
                        setTimeout(function (){document.getElementById('bgmusic').volume = 1;},1200)
                    }
                    else if(document.getElementById('lll').innerHTML === 'op'){
                        document.getElementById('bgmusic').volume = 0.5;
                        document.getElementById('push').volume =0.4;
                        document.getElementById('push').play();
                        document.getElementById('alert').play();
                        document.getElementById('lll').innerHTML = 'cp' ;
                        document.getElementById('main').style.animation = 'shak 1000ms ';
                        document.getElementById('warn').style.display = 'block';
                        setTimeout(function (){document.getElementById('warn').style.display = 'none';},1200)
                        setTimeout(function (){document.getElementById('bgmusic').volume = 1;},1200)
                    }
                    else if(document.getElementById('lll').innerHTML === 'cp'){
                        document.getElementById('bgmusic').volume = 0.5;
                        document.getElementById('boom').play();
                        //document.getElementById('lll').innerHTML= '0'; 
                        document.getElementById('main').innerHTML = '';
                        let stychn = 'top:' + theCSSpropUp + ';left:' + (parseInt(theCSSprop)-50) + 'px' + ';height:210px;width:310px;background-image:url(out.gif);background-size:100% 100%';   
                        document.getElementById('main').setAttribute('style', stychn);
                        setTimeout(function (){document.getElementById('bgmusic').volume = 1;},1200)
                        setTimeout(function (){document.getElementById('main').remove()},1300)
                        document.getElementById('end').style.display = 'flex';
                        document.getElementById('end').innerHTML = 'Opps !! <br> You are so close to win. <br>' + scr + ' More Consonant to win <br><button id="replay" onclick="replay()"> Play Again</button>'
                        document.getElementById('no').style.display= 'none';
                        document.getElementById('score').style.display = 'none';
                        
                    }
                    }block[i].remove();
                    
                }}}}                
setTimeout(find,50)    
}

function start(){
    find(); 
    crt();
    setTimeout(sec,4000);
}
function replay() {
   location.reload()
}


function sec(){
    var aa =  document.getElementById('body').children.length - 1;
    document.getElementById('body').children[aa].remove();
    document.getElementById('wordcount').innerText = parseInt(document.getElementById('wordcount').innerText) - 1;
    setTimeout(sec,4000);
}
function openFullscreen() {
    var elem = document.documentElement;
    document.getElementById('full').innerHTML==='2'
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
    }
}