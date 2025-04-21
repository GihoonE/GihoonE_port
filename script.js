(function(){
    const spanE1 = document.querySelector("main h2 span");
    const arr = ['Back-End Developer','Data-Engineer','Full-Stack Developer'];
    let index = 0;
    let cur = arr[index].split("");
    function writeTxt(){
        spanE1.textContent += cur.shift();
        if(cur.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random()*100));
            //unit is ms
        } else {
            cur = spanE1.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }
    function deleteTxt(){
        cur.pop();
        spanE1.textContent = cur.join("")
        if(cur.length !== 0){
            setTimeout(deleteTxt, Math.floor(Math.random*100));
        } else {
            index += 1;
            cur = arr[index].split("");
            writeTxt()
        }
    }
    writeTxt();
})();

const headerE1 = document.querySelector('header');
window.addEventListener('scroll',function(){
    this.requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
    let bsy = window.scrollY ? window.scrollY : window.pageYOffset;
    if (bsy > 0){
        headerE1.classList.add('active')
    } else {
        headerE1.classList.remove('active')
    }
};

const animationMove = function(selector){
    const targetE1 = document.querySelector(selector);
    const bsy = window.pageYOffset;
    const tay = targetE1.getBoundingClientRect().top + bsy;
    window.scrollTo({top: tay, behavior: 'smooth'});
};

const scollMoveE1 = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scollMoveE1.length; i++){
    scollMoveE1[i].addEventListener('click',function(e){
        const target = this.dataset.target;
        animationMove(target)
    })
}