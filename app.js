var set_time=document.querySelector('#set_time')
var play=document.querySelector('#play')
var resume=document.querySelector('#resume')
var reset= document.querySelector('#reset')

var player1=document.querySelector('.player1')
var player2=document.querySelector('.player2')
var getTens=document.querySelector('#getTens')
var show_set_time=document.querySelector('.show-set-time')

set_time.addEventListener('click',() => {
    show_set_time.style.display='block'
    player2.innerHTML='00'
    // alert(time.value)
})



