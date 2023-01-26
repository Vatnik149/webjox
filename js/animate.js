const btn = document.querySelector('.sending .btn');
const h1Maintext = document.querySelector('.main-text h1');
const pMaintext = document.querySelector('.main-text p');
let timer = null;


btn.addEventListener('click', e => {
    btn.classList.add('animate__animated','animate__bounce');
    clearTimeout(timer);
    timer = setTimeout(()=> btn.classList.remove('animate__animated','animate__bounce'),1000);
});

let scrollpos = window.scrollY;
const ourServices = document.querySelector('.services .head');
const workWithMe = document.querySelector('.work .head');
const ourCase = document.querySelector('.cases .head');
const revText= document.querySelector('.reviews .head');

const add_animate = () => ourServices.classList.add('animate__animated', 'animate__slideInLeft');


//text Animation

// let h1text = h1Maintext.textContent.split("");
// let resulth1 = "";

// h1text.forEach(function(char){
//     resulth1 +=(char.trim() === "")?"":"<span>"+char+"</span>";
// })

// h1Maintext.innerHTML = resulth1;
// console.log(h1Maintext.outerHTML);




