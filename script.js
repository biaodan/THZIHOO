/* ==========================================
   CONFIG
========================================== */

const TG_LINK = "https://t.me/YourTelegram";

const PIXEL_ID = "1345532354202874";

/* ==========================================
   TELEGRAM BUTTON
========================================== */

document.querySelectorAll(".tg-btn").forEach(btn=>{

    btn.addEventListener("click",function(e){

        e.preventDefault();

        if(typeof fbq!=="undefined"){
            fbq("track","Lead");
        }

        setTimeout(()=>{
            window.location.href=TG_LINK;
        },150);

    });

});


/* ==========================================
   FAQ
========================================== */

document.querySelectorAll(".faq-item").forEach(item=>{

    item.querySelector(".faq-question").onclick=()=>{

        item.classList.toggle("active");

    }

});


/* ==========================================
   REVEAL ANIMATION
========================================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll("section").forEach(el=>{

el.classList.add("reveal");

observer.observe(el);

});


/* ==========================================
   STICKY BUTTON
========================================== */

const sticky=document.querySelector(".sticky-apply");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

sticky.style.display="block";

}else{

sticky.style.display="none";

}

});


/* ==========================================
   COUNT UP
========================================== */

const salary=document.querySelector(".salary-money");

let current=300;

const target=5000;

const timer=setInterval(()=>{

current+=97;

salary.innerHTML="₱300 - ₱"+current.toLocaleString();

if(current>=target){

salary.innerHTML="₱300 - ₱5,000";

clearInterval(timer);

}

},35);


/* ==========================================
   LIVE POPUP
========================================== */

const users=[

"Maria from Manila",

"John from Cebu",

"Angela from Davao",

"Kevin from Quezon",

"Rose from Makati",

"Mark from Pasig",

"Jenny from Taguig",

"Daniel from Iloilo"

];

function showNotice(){

const div=document.createElement("div");

div.className="live-popup";

div.innerHTML=`

<div class="live-avatar">

👤

</div>

<div>

<strong>${users[Math.floor(Math.random()*users.length)]}</strong>

<br>

Applied successfully.

</div>

`;

document.body.appendChild(div);

setTimeout(()=>{

div.classList.add("show");

},100);

setTimeout(()=>{

div.classList.remove("show");

setTimeout(()=>{

div.remove();

},400);

},3500);

}

setInterval(showNotice,8000);


/* ==========================================
   APPLY POPUP
========================================== */

setTimeout(()=>{

const modal=document.createElement("div");

modal.className="apply-modal";

modal.innerHTML=`

<div class="apply-box">

<h2>

🎉 Limited Positions Available

</h2>

<p>

Start your online application today.

</p>

<a class="tg-btn"

href="${TG_LINK}">

Apply via Telegram

</a>

<div class="close-modal">

Maybe Later

</div>

</div>

`;

document.body.appendChild(modal);

modal.querySelector(".close-modal").onclick=()=>{

modal.remove();

}

},15000);


/* ==========================================
   PAGE VIEW
========================================== */

if(typeof fbq!=="undefined"){

fbq("track","PageView");

}.live-popup{

position:fixed;

left:18px;

bottom:110px;

background:#fff;

padding:14px 18px;

border-radius:18px;

display:flex;

gap:14px;

align-items:center;

box-shadow:0 20px 50px rgba(0,0,0,.15);

transform:translateY(120px);

opacity:0;

transition:.35s;

z-index:99999;

}

.live-popup.show{

transform:translateY(0);

opacity:1;

}

.live-avatar{

width:42px;

height:42px;

border-radius:50%;

background:#14b8a6;

display:flex;

align-items:center;

justify-content:center;

color:#fff;

font-size:18px;

}

.apply-modal{

position:fixed;

inset:0;

background:rgba(0,0,0,.55);

display:flex;

align-items:center;

justify-content:center;

z-index:999999;

}

.apply-box{

width:90%;

max-width:380px;

background:#fff;

border-radius:30px;

padding:35px;

text-align:center;

}

.apply-box h2{

margin-bottom:15px;

}

.apply-box p{

margin-bottom:25px;

color:#6b7280;

}

.close-modal{

margin-top:18px;

cursor:pointer;

color:#6b7280;

}