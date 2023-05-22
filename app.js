var set_time=document.querySelector('#set_time')
var play=document.querySelector('#play')
var resume=document.querySelector('.resume')
var pause=document.querySelector('#pause')
var reset= document.querySelector('#reset')
var getsecondso1= document.querySelector('#getsecondso1')
var getseconds2= document.querySelector('#getseconds2')
var getminutes1= document.querySelector('#getminutes1')
var getminutes2= document.querySelector('#getminutes2')
// var getminutes2= document.querySelector('#getminutes2')

var player1=document.querySelector('.player1')
var player2=document.querySelector('.player2')
var getminutes=document.querySelector('#getminutes')
var show_set_time=document.querySelector('.show-set-time')

var min=document.querySelector('#min')
var entertime=document.querySelector('#entertime')


set_time.addEventListener('click',() => {
    show_set_time.style.display='block'
    // begin_time()
})

let setmin=0
let player1time=60
let player2time=60
// let getsecondso=''

// let setmin1=''

function begin_time() {
    let setmino=0

if(min.value==''){
    setmin1=5
    setmin2=5
    setmino=setmin1
}
else {
    setmin1=min.value
    setmino=setmin1
    setmin2=min.value
}
    show_set_time.style.display='none'

    getminutes1.innerHTML=setmin1
    getminutes2.innerHTML=setmin2
}
let intervals=''

player1.addEventListener('click',() =>{
    clearInterval(intervals)
    intervals=setInterval(play2timer,100)
})

player2.addEventListener('click',() =>{
    clearInterval(intervals)
    intervals=setInterval(play1timer,100)
})

function play1timer() {
    player1time--;
    if(player1time>9){
        getsecondso1.innerHTML = player1time

    }
    if (player1time <9) {
        getsecondso1.innerHTML = '0'+player1time
    }
    if (player1time <1) {
        player1time=59
       setmin1--
        getsecondso1.innerHTML = player1time
        getminutes1.innerHTML=setmin1
    }


}


function play2timer(){
    player2time--;
    if(player2time<9){
        getseconds2.innerHTML = '0'+player2time
    }
    else{
        getseconds2.innerHTML = player2time
    }

}

pause.addEventListener('click',() =>{
    // alert('vb')
    clearInterval(intervals)

})






