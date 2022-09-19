const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobile-main');
const counters = document.querySelectorAll('.counter');
let scroll = false;
document.addEventListener('scroll' , scrollPage);

btn.addEventListener("click" , navtoggle);
function navtoggle(){
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling')
    mobileMenu.classList.toggle('mobile-open-menu')
}
function scrollPage(){
    let scrollPos = window.scrollY;
    if(scrollPos > 100 && !scroll){
        countUp();
        scroll=true;
    }else if(scrollPos < 100 && scroll){
        reset();
        scroll = false
    }
}
function countUp(){
    counters.forEach(counter=>{
        counter.innerHTML = "0";
        const updateCounter = ()=>{
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerHTML;
            const increment = target / 100;
            if(target > c){
                counter.innerHTML = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 75 );
            }else counter.innerHTML = target;

        }
        updateCounter();
    })
}
function reset(){
    counters.forEach((counter) => counter.innerHTML ="0")
}