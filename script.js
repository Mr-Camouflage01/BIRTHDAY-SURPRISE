// Elements

const countdownPage = document.getElementById("countdownPage");
const mainPage = document.getElementById("mainPage");
const giftPage = document.getElementById("giftPage");
const surprisePage = document.getElementById("surprisePage");

const countdown = document.getElementById("countdown");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const giftBtn = document.getElementById("giftBtn");
const openGift = document.getElementById("openGift");

const slideImage = document.getElementById("slideImage");

const typewriter = document.getElementById("typewriter");

const celebrateBtn = document.getElementById("celebrate");


// Countdown

let seconds = 5;

mainPage.style.display = "none";
giftPage.style.display = "none";
surprisePage.style.display = "none";

const timer = setInterval(() => {

    countdown.innerHTML = seconds;

    seconds--;

    if (seconds < 0) {

        clearInterval(timer);

        countdownPage.style.display = "none";

        mainPage.style.display = "flex";

    }

},1000);


// Music

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML="⏸ Pause Music";

    }else{

        music.pause();

        musicBtn.innerHTML="🎵 Play Music";

    }

});


// Go To Gift

giftBtn.addEventListener("click",()=>{

    mainPage.style.display="none";

    giftPage.style.display="flex";

});


// Open Gift

openGift.addEventListener("click",()=>{

    giftPage.style.display="none";

    surprisePage.style.display="flex";

    startTypewriter();

});
// ----------------------------
// Typewriter Letter
// ----------------------------

const message = `Dear Sister,

Happy Birthday! ❤️
ROSHNI NEPALI

May God bless you with good health,
success,joy,and endless beautiful moments.
YE SAB THIK HAI LEKIN
HUMESHA GOBAR KHATE RAHO😂😂
ORR KISI KO CHAIN SE MATT JEENO DO..
YE ROUTINE FOLLOW KRTE REHNA YE NHI RUKNA CHAHIYE
😁😁

- Your Brother SHUBHAM`;

function startTypewriter(){

    let i = 0;

    function typing(){

        if(i < message.length){

            typewriter.innerHTML += message.charAt(i);

            i++;

            setTimeout(typing,40);

        }

    }

    typing();

}

// ----------------------------
// Photo Slideshow
// ----------------------------

const photos = [

"images/photo1.jpg",

"images/photo2.jpg",

"images/photo3.jpg",

"images/photo4.jpg"

];

let photoIndex = 0;

setInterval(()=>{

    photoIndex++;

    if(photoIndex >= photos.length){

        photoIndex = 0;

    }

    slideImage.src = photos[photoIndex];

},3000);


// ----------------------------
// Celebrate Button
// ----------------------------

celebrateBtn.addEventListener("click",()=>{

    createConfetti();

});


// ----------------------------
// Confetti
// ----------------------------

function createConfetti(){

for(let i=0;i<200;i++){

const confetti=document.createElement("div");

confetti.style.position="fixed";

confetti.style.width="10px";

confetti.style.height="10px";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.background=`hsl(${Math.random()*360},100%,60%)`;

confetti.style.borderRadius="50%";

confetti.style.pointerEvents="none";

confetti.style.transition="all 5s linear";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.transform=`translateY(${window.innerHeight+100}px)
rotate(720deg)`;

confetti.style.opacity="0";

},50);

setTimeout(()=>{

confetti.remove();

},5500);

}

}


// ----------------------------
// Fireworks
// ----------------------------

const canvas = document.getElementById("fireworks");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

const particles=[];

function firework(){

for(let i=0;i<80;i++){

particles.push({

x:canvas.width/2,

y:canvas.height/2,

dx:(Math.random()-0.5)*8,

dy:(Math.random()-0.5)*8,

life:100,

color:`hsl(${Math.random()*360},100%,60%)`

});

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

ctx.beginPath();

ctx.arc(p.x,p.y,3,0,Math.PI*2);

ctx.fillStyle=p.color;

ctx.fill();

p.x+=p.dx;

p.y+=p.dy;

p.life--;

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animate);

}

animate();

celebrateBtn.addEventListener("click",()=>{

firework();

});


// ----------------------------
// Resize Canvas
// ----------------------------

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});