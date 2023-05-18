var set_time=document.querySelector('#set_time')
var play=document.querySelector('#play')
var resume=document.querySelector('.resume')
var pause=document.querySelector('#pause')
var reset= document.querySelector('#reset')

var player1=document.querySelector('.player1')
var player2=document.querySelector('.player2')
var getminutes=document.querySelector('#getminutes')
var show_set_time=document.querySelector('.show-set-time')

var min=document.querySelector('#min')
var entertime=document.querySelector('#entertime')


set_time.addEventListener('click',() => {
    show_set_time.style.display='block'
})

let setmin=0
let hour=''
player1time=''
player2time=''


function begin_time() {
if(min.value==''){
    setmin=5
    player1time=setmin
    player2time=setmin
}
else {
    setmin=min.value
    player1time=setmin
    player2time=setmin
}
    show_set_time.style.display='none'

    player1.innerHTML=player2time
    player2.innerHTML=player1time
}
let intervals=''

player1.addEventListener('click',() =>{
    clearInterval(intervals)
    intervals=setInterval(play2time,100)
})

player2.addEventListener('click',() =>{
    clearInterval(intervals)
    intervals=setInterval(play1time,90)
})

function play1time() {
    player1time++;

    if (player1time < 10) {
        player1.innerHTML = '00' + ' : ' + '0' + player1time;
    }
    if (player1time > 9) {
        player1.innerHTML = '00' + ' : ' + player1time;
    }
    if (player1time > 59) {
        hour++
        player1time = 0;
        player1.innerHTML = hour + ' : ' + '00';
    }
}


function play2time(){
    player2time--
    player2.innerHTML=player2time + ' : ' +'00'

}

pause.addEventListener('click',() =>{
    // alert('vb')
    clearInterval(intervals)

})






