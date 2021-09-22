var menu = document.querySelector('.menu_img');
var choose = document.querySelector('.choose');
var close = document.querySelector('#close_menu');
var basketball = document.querySelector('#basketball');

menu.addEventListener('click',()=>{
    
    choose.classList.add('chse');
    choose.classList.remove('choose');
    choose.classList.remove('sright');
    choose.classList.add('sleft');
})


close.addEventListener('click',()=>{
    
    choose.classList.remove('sleft');
    choose.classList.add('sright');
    setTimeout(() => {
        choose.classList.add('choose');
    }, 500);
    
})

basketball.addEventListener('mouseover',()=>{
    
    basketball.classList.add('basketspin');
})

basketball.addEventListener('click',()=>{
    
    basketball.classList.add('basket');
    setTimeout(() => {
        basketball.classList.remove('basketspin');
        basketball.classList.remove('basket');
    }, 3000);
})

var bball = document.querySelector('#bball');
bball.addEventListener('click',()=>{
    console.log("hhhhhhh");
})