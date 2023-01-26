
const switcher = document.querySelector(".switch_input");
const b = document.querySelector('body');
const theme = document.querySelector('.theme');
switcher.addEventListener('click', ()=>{
    let themeLestener;
    if(localStorage.getItem('darkTheme') == "true"){
        localStorage.setItem('darkTheme', 'false');
        b.classList.add('whiteTheme');
        theme.classList.add('on');
        console.log("Переключили");
    }
    else{
        localStorage.setItem('darkTheme', 'true');
        b.classList.remove('whiteTheme');
        theme.classList.remove('on');
        console.log("Переключили");
    }
});
if(localStorage.getItem('darkTheme') == "true"){
    b.classList.remove('whiteTheme');
}
else{
    b.classList.add('whiteTheme');
    theme.classList.add('on');
}
