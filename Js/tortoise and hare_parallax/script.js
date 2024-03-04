let home_title = document.getElementById('home_title');
let home_tortoise = document.getElementById('home_tortoise');
let home_rabbit = document.getElementById('home_rabbit');

let part1_text = document.getElementById('part1_text');
let part1_rabbit = document.getElementById('part1_rabbit');

let part2_text = document.getElementById('part2_text');

let part3_bg= document.getElementById('part3_bg');
let part3_text = document.getElementById('part3_text');
let part3_rabbit = document.getElementById('part3_rabbit');

let part4_title = document.getElementById('part4_title');

let part5_title = document.getElementById('part5_title');
let part5_tortoise = document.getElementById('part5_tortoise');

let part6_title= document.getElementById('part6_title');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;

    home_title.style.top = value * .57 + 'px';
    home_tortoise.style.left = value * .6 + 'px';
    home_rabbit.style.left= value * -.6 + 'px';

    part1_text.style.top = value * -.35 + 'px' ;
    part1_rabbit.style.left= value * .7 + 'px';

    part2_text.style.left = value * .06 +'px';

    part3_bg.style.left = value * -.4 +'px';
    part3_text.style.left = value * -.3 +'px';
    part3_rabbit.style.left= value * .3 + 'px';

    part4_title.style.top= value * -.12 + 'px';
    
    part5_tortoise.style.left = value * .2 + 'px';
    part5_title.style.top = value * -.09 + 'px';

    part6_title.style.top = value * -.02 + 'px';
    part6_title.style.left = value * -.04 + 'px';
});