const skew1 = document.querySelector(".sec9-content1");
const skew2 = document.querySelector(".sec9-content2");
const skew3 = document.querySelector("#a");
const skew4 = document.querySelector("#b");
const skew5 = document.querySelector("#c");
skew1.addEventListener("mousemove",(e)=>{
    mouseTrack(e,skew1);
});
skew1.addEventListener("mouseout",(e)=>{
    mouseOut(e,skew1);
});
skew2.addEventListener("mousemove",(e)=>{
    mouseTrack(e,skew2);
});
skew2.addEventListener("mouseout",(e)=>{
    mouseOut(e,skew2);
});
skew3.addEventListener("mousemove",(e)=>{
    mouseTrack(e,skew3);
});
skew3.addEventListener("mouseout",(e)=>{
    mouseOut(e,skew3);
});
skew4.addEventListener("mousemove",(e)=>{
    mouseTrack(e,skew4);
});
skew4.addEventListener("mouseout",(e)=>{
    mouseOut(e,skew4);
});
skew5.addEventListener("mousemove",(e)=>{
    mouseTrack(e,skew5);
});
skew5.addEventListener("mouseout",(e)=>{
    mouseOut(e,skew5);
});
function mouseOut(event,element){
    const offsetX = 0;
    const offsetY = 0;
    element.style.setProperty("--rotateX",offsetX+"deg");
    element.style.setProperty("--rotateY",offsetY+"deg");
}
function mouseTrack(event,element){
    const x = event.clientX;
    const y = event.clientY;
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = ((x-middleX)/middleX)*10;
    const offsetY = ((y-middleY)/middleY)*10;

    element.style.setProperty("--rotateX", -1*offsetY +"deg");
    element.style.setProperty("--rotateY",offsetX +"deg");
}

window.addEventListener('scroll',function(e){
    const target = document.querySelectorAll('.animation-subdiv1');
    for(var i=0;i<4;i++){
    var posX = window.pageYOffset*target[i].dataset.ratex;
    target[i].style.transform = 'translate3d('+posX+'px,0px,0px)';}
})
var oldScrollY = window.scrollY;
var directionText = document.getElementById('direction');
window.onscroll = function(e) {
  if(oldScrollY < window.scrollY){
    const nav = document.querySelector('.nav');
    nav.classList.add("active");
    nav.classList.remove("deactive");
    nav.style.transform = "translateY(-100%)";
    const modeChange = document.querySelector(".modeChange");
    modeChange.classList.add("deactive");
    modeChange.classList.remove("active");
    modeChange.style.scale = "0.5";
    const anim = document.querySelector(".modeChange-content1");
    anim.style.opacity = "0";
} else {
    const nav = document.querySelector('.nav');
    nav.classList.add("deactive");
    nav.classList.remove("active");
    nav.style.transform = "translateY(0%)";
    const modeChange = document.querySelector(".modeChange");
    modeChange.classList.add("active");
    modeChange.classList.remove("deactive");
    modeChange.style.scale = "1";
    const anim = document.querySelector(".modeChange-content1");
    anim.style.opacity = "1";
  }
  oldScrollY = window.scrollY;
}
const headers = document.querySelectorAll('.accordian-header');
const contents = document.querySelectorAll('.sec-one-subflex1-content-txt');
const lines = document.querySelectorAll('.sec-one-subflex1-line2');
const images = document.querySelectorAll(".h2-imgtag");
const imgParent = document.querySelector(".h2-img");
headers.forEach((head)=>{
    head.addEventListener("click",()=>{
        const item = head.parentElement;
        head.style.opacity = "1";
        const content = item.querySelector('.sec-one-subflex1-content-txt');

        contents.forEach((con)=>{
            if(con!==content){
                con.classList.remove("active");
            }
        });
        content.classList.toggle('active');


        const line = item.querySelector('.sec-one-subflex1-line2');
        lines.forEach((l)=>{
            if(l!==line){
                l.classList.remove("active");
            }
        });
        line.classList.toggle('active');
    })
});
headers[0].addEventListener("click",()=>{
    headers[0].style.opacity = '1';
    headers[1].style.opacity = '0.4';
    headers[2].style.opacity = '0.4';
    headers[3].style.opacity = '0.4';
    images[0].classList.toggle('active');
    images[1].classList.remove('active');
    images[2].classList.remove('active');
    images[3].classList.remove('active');
});
headers[1].addEventListener("click",()=>{
    headers[1].style.opacity = '1';
    headers[0].style.opacity = '0.4';
    headers[2].style.opacity = '0.4';
    headers[3].style.opacity = '0.4';
    images[1].classList.toggle('active');
    images[0].classList.remove('active');
    images[2].classList.remove('active');
    images[3].classList.remove('active');
});
headers[2].addEventListener("click",()=>{
    headers[2].style.opacity = '1';
    headers[1].style.opacity = '0.4';
    headers[0].style.opacity = '0.4';
    headers[3].style.opacity = '0.4';
    images[2].classList.toggle('active');
    images[1].classList.remove('active');
    images[0].classList.remove('active');
    images[3].classList.remove('active');
});
headers[3].addEventListener("click",()=>{
    headers[3].style.opacity = '1';
    headers[1].style.opacity = '0.4';
    headers[2].style.opacity = '0.4';
    headers[0].style.opacity = '0.4';
    images[3].classList.toggle('active');
    images[1].classList.remove('active');
    images[2].classList.remove('active');
    images[0].classList.remove('active');
});
const lineOne = document.querySelector("#one");
const lineTwo = document.querySelector("#two");
const lineThree = document.querySelector("#three");
const lineFour = document.querySelector("#four");
const h2Img = document.querySelectorAll(".h2-imgtag");

lineOne.classList.add("active");
contents[0].classList.add("active");
headers[0].style.opacity = "1";
h2Img[0].classList.add("active");
lineOne.addEventListener("animationend",()=>{
    lineOne.classList.remove('active');
    lineTwo.classList.add('active');
    contents[0].classList.remove("active");
    headers[0].style.opacity = "0.4";
    contents[1].classList.add('active');
    headers[1].style.opacity = '1'
    h2Img[0].classList.remove("active");
    h2Img[1].classList.add("active");
});
lineTwo.addEventListener("animationend",()=>{
    lineTwo.classList.remove('active');
    lineThree.classList.add('active');
    contents[1].classList.remove("active");
    headers[1].style.opacity = "0.4";
    contents[2].classList.add('active');
    headers[2].style.opacity = '1'
    h2Img[1].classList.remove("active");
    h2Img[2].classList.add("active");
});
lineThree.addEventListener("animationend",()=>{
    lineThree.classList.remove('active');
    lineFour.classList.add('active');
    contents[2].classList.remove("active");
    headers[2].style.opacity = "0.4";
    contents[3].classList.add('active');
    headers[3].style.opacity = '1'
    h2Img[2].classList.remove("active");
    h2Img[3].classList.add("active");
});
lineFour.addEventListener("animationend",()=>{
    lineFour.classList.remove('active');
    lineOne.classList.add('active');
    contents[3].classList.remove("active");
    headers[3].style.opacity = "0.4";
    contents[0].classList.add('active');
    headers[0].style.opacity = '1'
    h2Img[3].classList.remove("active");
    h2Img[0].classList.add("active");
});
const sec4img = document.querySelectorAll(".sec4Img");
for(var i=0;i<1000;i++){
setTimeout(()=>{
    sec4img[0].classList.add("active");
    setTimeout(() => {
        sec4img[0].classList.remove("active");
    }, 2000);
},2000+22000*i);
setTimeout(()=>{
    sec4img[1].classList.add("active");
    setTimeout(() => {
        sec4img[1].classList.remove("active");
    }, 2000);
},4000+22000*i);
setTimeout(()=>{
    sec4img[2].classList.add("active");
    setTimeout(() => {
        sec4img[2].classList.remove("active");
    }, 2000);
},6000+22000*i);
setTimeout(()=>{
    sec4img[3].classList.add("active");
    setTimeout(() => {
        sec4img[3].classList.remove("active");
    }, 2000);
},8000+22000*i);
setTimeout(()=>{
    sec4img[4].classList.add("active");
    setTimeout(() => {
        sec4img[4].classList.remove("active");
    }, 2000);
},10000+22000*i);
setTimeout(()=>{
    sec4img[5].classList.add("active");
    setTimeout(() => {
        sec4img[5].classList.remove("active");
    }, 2000);
},12000+22000*i);
setTimeout(()=>{
    sec4img[6].classList.add("active");
    setTimeout(() => {
        sec4img[6].classList.remove("active");
    }, 2000);
},14000+22000*i);
setTimeout(()=>{
    sec4img[7].classList.add("active");
    setTimeout(() => {
        sec4img[7].classList.remove("active");
    },2000);
},16000+22000*i);
setTimeout(()=>{
    sec4img[8].classList.add("active");
    setTimeout(() => {
        sec4img[8].classList.remove("active");
    },2000);
},18000+22000*i);
setTimeout(()=>{
    sec4img[9].classList.add("active");
    setTimeout(() => {
        sec4img[9].classList.remove("active");
    },2000);
},20000+22000*i);
setTimeout(()=>{
    sec4img[10].classList.add("active");
    setTimeout(() => {
        sec4img[10].classList.remove("active");
    }, 2000);
},22000+22000*i);
}

const sec3img = document.querySelectorAll(".sec3Img");
for(var  i=0;i<1000;i++){
    setTimeout(() => {
        sec3img[0].classList.add("active");
        setTimeout(() => {
            sec3img[0].classList.remove("active");
        }, 1000);
    }, 1000+5000*i);
    setTimeout(() => {
        sec3img[1].classList.add("active");
        setTimeout(() => {
            sec3img[1].classList.remove("active");
        }, 1000);
    }, 2000+5000*i);
    setTimeout(() => {
        sec3img[2].classList.add("active");
        setTimeout(() => {
            sec3img[2].classList.remove("active");
        }, 1000);
    }, 3000+5000*i);
    setTimeout(() => {
        sec3img[3].classList.add("active");
        setTimeout(() => {
            sec3img[3].classList.remove("active");
        }, 1000);
    }, 4000+5000*i);
    setTimeout(() => {
        sec3img[4].classList.add("active");
        setTimeout(() => {
            sec3img[4].classList.remove("active");
        }, 1000);
    }, 5000+5000*i);
}
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const carousel = document.querySelector(".sec8-content2a-carouselmain");

const slides = document.querySelectorAll(".sec8-maincarousel-cards");
let slideIndex = 0;
const totalSlides = slides.length;
const slidesToShow = 3;
const slideWidth = slides[0].offsetWidth;
function showSlides() {
    const offset = -slideIndex * slideWidth;
    document.querySelector('.sec8-content2a-carousel1').style.transform = `translateX(${offset}px)`;
  }

  function prevSlide() {
    slideIndex = Math.max(slideIndex - 3, 0);
    showSlides();
    if(slideIndex ===0){
        leftBtn.style.opacity = "0.4";
        rightBtn.addEventListener("click",()=>{
          leftBtn.style.opacity = "1";
        })
      }else if(slideIndex ===6){
        rightBtn.style.opacity = "0.4";
        leftBtn.addEventListener("click",()=>{
          rightBtn.style.opacity = "1";
        })
      }
  }

  function nextSlide() {
    slideIndex = Math.min(slideIndex + 3, totalSlides - slidesToShow);
    showSlides();
    if(slideIndex ===0){
      leftBtn.style.opacity = "0.4";
      rightBtn.addEventListener("click",()=>{
        leftBtn.style.opacity = "1";
      })
    }else if(slideIndex ===6){
      rightBtn.style.opacity = "0.4";
      leftBtn.addEventListener("click",()=>{
        rightBtn.style.opacity = "1";
      })
    }
  }

  showSlides();

//arrows transition

for(let i=0;i<7;i++){
const sec4i = document.querySelectorAll(".sec4-i");
const sec4Arrow = document.querySelectorAll(".sec4-arrow");
sec4Arrow[i].addEventListener("mouseenter",()=>{
    sec4i[i].classList.add("active");
})
sec4Arrow[i].addEventListener("mouseout",()=>{
    sec4i[i].classList.remove("active");
})
}

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY + 150);
});

//navbar reponsiveness

const navG1 = document.querySelector(".nav-g1");
const navG2 = document.querySelector(".nav-g2");
const navBtn = document.querySelector(".nav-btn");
const overlay = document.querySelector(".overlay");
const navBottom = document.querySelector(".nav-bottom");
navBtn.addEventListener("click",()=>{
    navG1.classList.toggle("active");
    navG2.classList.toggle("active");
    overlay.classList.toggle("active");
    navBottom.classList.toggle("active");
})

//code for parallax, cannot make parallax wrappers as positoning gives bt everytime...thus could not be implemented
const myImage1 = document.querySelector(".sec5-content-img");
const myImage2 = document.querySelectorAll(".sec4Img");
const myImage3 = document.querySelector(".sec10-image");
window.addEventListener('scroll', () => {
    myImage2.forEach(image => {
        const scrollY = window.scrollY;
        const scrollY2 = -0.3*scrollY;
        image.style.transform = `translateY(${scrollY2}px)`;
    });
    const scrollY = window.scrollY;
    const scrollY3 = -0.1*scrollY;
    const scrollY2 = -0.2* scrollY;
    myImage1.style.transform = `translateY(${scrollY2}px)`;
    myImage3.style.transform = `translateY(${scrollY3}px)`;
});
/*
function hasQuiet() {

    var cold = false,
    hike = function() {};
  
    try {
    var aid = Object.defineProperty({}, 'passive', {
    get() {cold = true}
    });
    window.addEventListener('test', hike, aid);
    window.removeEventListener('test', hike, aid);
    } catch (e) {}
  
    return cold;
  }

var scrollSpeedFactor = 0.8; // Change this value as needed

// Add an event listener for the wheel event
window.addEventListener('wheel', function(event) {
    // Prevent the default scrolling behavior
    event.preventDefault();
    
    // Calculate the new scroll position
    var scrollAmount = event.deltaY * scrollSpeedFactor;
    window.scrollBy(0, scrollAmount);
},hasQuiet() ? {passive: false} : false);
*/
const modeChange = document.querySelector(".modeChange");
modeChange.addEventListener("click",()=>{
    for(let i=0;i<7;i++){document.querySelectorAll("#notHome")[i].classList.toggle("dm");}
    for(let i=0;i<3;i++){document.querySelectorAll(".navTopanchor")[i].classList.toggle("dm");}
    for(let i=0;i<4;i++){document.querySelectorAll(".sec-one h6")[i].classList.toggle("dm");}
    for(let i=0;i<5;i++){document.querySelectorAll(".sec-one p")[i].classList.toggle("dm");}
    for(let i=0;i<70;i++){document.querySelectorAll(".txt")[i].classList.toggle("dm");}
    for(let i=0;i<3;i++){document.querySelectorAll(".card1-container")[i].classList.toggle("dm");}
    for(let i=0;i<9;i++){document.querySelectorAll(".pqr1 div")[i].classList.toggle("dm");}
    for(let i=0;i<9;i++){document.querySelectorAll(".pqr")[i].classList.toggle("dm");}
    for(let i=0;i<9;i++){document.querySelectorAll(".pqr2H6")[i].classList.toggle("dm");}
    for(let i=0;i<9;i++){document.querySelectorAll(".pqr2-div2")[i].classList.toggle("dm");}
    for(let i=0;i<7;i++){document.querySelectorAll(".fotter-a")[i].classList.toggle("dm");}
    for(let i=0;i<3;i++){document.querySelectorAll(".footer-content2-a")[i].classList.toggle("dm");}
    for(let i=0;i<4;i++){document.querySelectorAll(".content2a-icon")[i].classList.toggle("dm");}
    for(let i=0;i<2;i++){document.querySelectorAll(".sec4-anchortag")[i].classList.toggle("dm");}
    for(let i=0;i<3;i++){document.querySelectorAll(".sec7-card1-btn-icon")[i].classList.toggle("dm");}
    for(let i=0;i<3;i++){document.querySelectorAll(".sec7-card1-btn-i")[i].classList.toggle("dm");}
    for(let i=0;i<3;i++){document.querySelectorAll(".color")[i].classList.toggle("dm");}
    for(let i=0;i<4;i++){document.querySelectorAll(".sec-one-subflex1-line1")[i].classList.toggle("dm");}
    for(let i=0;i<4;i++){document.querySelectorAll(".sec-one-subflex1-line2")[i].classList.toggle("dm");}
    document.querySelectorAll(".hero-txt-h1")[0].classList.toggle("dm");
    document.querySelectorAll(".hero-txt-h1")[1].classList.toggle("dm");
    document.querySelectorAll(".sec8-carousel-btn")[0].classList.toggle("dm");
    document.querySelectorAll(".sec8-carousel-btn")[1].classList.toggle("dm");
    document.querySelectorAll(".sec8-btn-carousel-i")[0].classList.toggle("dm");
    document.querySelectorAll(".sec8-btn-carousel-i")[1].classList.toggle("dm");
    document.querySelectorAll(".p")[0].classList.toggle("dm");
    document.querySelectorAll(".p")[1].classList.toggle("dm");
    document.querySelector(".nav-top").classList.toggle("dm");
    document.querySelector(".nav-bottom").classList.toggle("dm");
    document.querySelector("#home").classList.toggle("dm");
    document.querySelector("body").classList.toggle("dm");
    document.querySelector(".sec-one").classList.toggle("dm");
    document.querySelector(".sec2-content1 p").classList.toggle("dm");
    document.querySelector(".hero-content2").classList.toggle("dm");
    document.querySelector(".hero-content-container").classList.toggle("dm");
    document.querySelector(".sec3H3").classList.toggle("dm");
    document.querySelector(".sec3p").classList.toggle("dm");
    document.querySelector(".sec4-content2").classList.toggle("dm");
    document.querySelector(".sec4H3").classList.toggle("dm");
    document.querySelector(".sec4H3p").classList.toggle("dm");
    document.querySelector(".sec5H3").classList.toggle("dm");
    document.querySelector(".sec5-content-txt2a").classList.toggle("dm");
    document.querySelector(".sec6-content1 h1").classList.toggle("dm");
    document.querySelector(".sec6-content1-video-container").classList.toggle("dm");
    document.querySelector(".sec6-content2").classList.toggle("dm");
    document.querySelector(".sec6-content3").classList.toggle("dm");
    document.querySelector(".efg").classList.toggle("dm");
    document.querySelector(".sec6-content3a").classList.toggle("dm");
    document.querySelector(".Vacancies").classList.toggle("dm");
    document.querySelector(".sec7H2").classList.toggle("dm");
    document.querySelector(".sec8-content1").classList.toggle("dm");
    document.querySelector(".sec8-content-container").classList.toggle("dm");
    document.querySelector(".sec9-content2").classList.toggle("dm");
    document.querySelector(".sec9-content1").classList.toggle("dm");
    document.querySelector(".sec9-content-container").classList.toggle("dm");
    document.querySelector(".sec9-content1-p").classList.toggle("dm");
    document.querySelector(".m1 h1").classList.toggle("dm");
    document.querySelector(".n1 h1").classList.toggle("dm");
    document.querySelector("footer").classList.toggle("dm");
    document.querySelector(".footer-endspan").classList.toggle("dm");
    document.querySelector(".footer-end-svg").classList.toggle("dm");
    document.querySelector(".a-svg").classList.toggle("dm");
    document.querySelector(".content2b").classList.toggle("dm");
    document.querySelector(".nav-g2").classList.toggle("dm");
    document.querySelector(".nav-g1").classList.toggle("dm");
    document.querySelector(".sec2-content1-b a").classList.toggle("dm");
    document.querySelector(".sec2Content1btxt").classList.toggle("dm");
    document.querySelector(".sec3Content1btxt").classList.toggle("dm");
    document.querySelector(".sec5Content1btxt").classList.toggle("dm");
    document.querySelector(".sec6Content1btxt").classList.toggle("dm");
    document.querySelector(".sec7Content1btxt").classList.toggle("dm");
    document.querySelector(".sec8Content1btxt").classList.toggle("dm");
    document.querySelector(".btn").classList.toggle("dm");
    document.querySelector(".bttn").classList.toggle("dm");
    document.querySelector(".icon").classList.toggle("dm");
    document.querySelector(".anchortag").classList.toggle("dm");
    document.querySelector(".sec10-content1").classList.toggle("dm");
    document.querySelectorAll(".sec4-arrow")[2].classList.toggle("dm");
    document.querySelectorAll(".sec4-arrow")[4].classList.toggle("dm");
    document.querySelector(".arrow5").classList.toggle("dm");
    document.querySelector(".arrow8").classList.toggle("dm");
    document.querySelector(".arrow7").classList.toggle("dm");
    document.querySelector(".icon5").classList.toggle("dm");
    document.querySelector(".icon6").classList.toggle("dm");
    document.querySelector(".icon7").classList.toggle("dm");
    document.querySelector(".icon8").classList.toggle("dm");
    document.querySelector(".sec6-btn").classList.toggle("dm");
    document.querySelector(".sec7-btn").classList.toggle("dm");
    document.querySelector(".sec8-btn").classList.toggle("dm");
    document.querySelector(".sec9-content1-btn").classList.toggle("dm");
    document.querySelector(".sec9-content1-btn-div").classList.toggle("dm");
    document.querySelector(".sec9-content1-btn-icon").classList.toggle("dm");
    document.querySelector(".east").classList.toggle("dm");
    document.querySelector(".east1").classList.toggle("dm");
    document.querySelector(".eastIcon").classList.toggle("dm");
    document.querySelector(".sec2p").classList.toggle("dm");
    document.querySelector(".sec2pa").classList.toggle("dm");
    document.querySelector(".home").classList.toggle("dm");
    document.querySelectorAll(".diffC")[0].classList.toggle("dm");
    document.querySelectorAll(".diffC")[1].classList.toggle("dm");
    document.querySelector(".overlay").classList.toggle("dm");
    document.querySelector(".modeChange-content1").classList.toggle("dm");
    document.querySelector(".modeChange-content2").classList.toggle("dm");
    document.querySelector(".modeChange-content3").classList.toggle("dm");
    document.querySelector(".modeChange-content4").classList.toggle("dm");
    document.querySelector(".modeChange").classList.toggle("dm");
    document.querySelector(".a1Svg1").classList.toggle("dm");
    document.querySelector(".a1Svg2").classList.toggle("dm");
    document.querySelectorAll(".a2Svg2")[0].classList.toggle("dm");
    document.querySelectorAll(".a2Svg2")[1].classList.toggle("dm");

    const x = document.querySelectorAll('sec4Img');
    toggleImage(document.querySelector(".computer"));
    toggleImage1();
    toggleImage2();
    toggleImage3();
    toggleImage4();
    toggleImage5();
    toggleImage6();
    toggleImage7();
    toggleImage8();
    toggleImage9();
    toggleImage10();
    toggleImage11();
    toggleImage13();
    toggleImage14();
    toggleImage15();
    toggleImage16();
    toggleImage17();
})


function toggleImage(img) {
    if (img.src.endsWith('sec5-img.webp')) {
      img.src = 'computer gold.webp';
    } else {
      img.src = 'sec5-img.webp';
    }
}
function toggleImage1() {
    const img = document.querySelectorAll(".sec4Img")[0];
    if (img.src.endsWith('a1.webp')) {
      img.src = 'a1-gold.webp';
    } else {
      img.src = 'a1.webp';
    }
}
function toggleImage2() {
    const img = document.querySelectorAll(".sec4Img")[1];
    if (img.src.endsWith('a2.webp')) {
      img.src = 'a2-gold.webp';
    } else {
      img.src = 'a2.webp';
    }
}
function toggleImage3() {
    const img = document.querySelectorAll(".sec4Img")[2];
    if (img.src.endsWith('a3.webp')) {
      img.src = 'a3-gold.webp';
    } else {
      img.src = 'a3.webp';
    }
}
function toggleImage4() {
    const img = document.querySelectorAll(".sec4Img")[3];
    if (img.src.endsWith('a4.webp')) {
      img.src = 'a4-gold.webp';
    } else {
      img.src = 'a4.webp';
    }
}
function toggleImage5() {
    const img = document.querySelectorAll(".sec4Img")[4];
    if (img.src.endsWith('a5.webp')) {
      img.src = 'a5-gold.webp';
    } else {
      img.src = 'a5.webp';
    }
}
function toggleImage6() {
    const img = document.querySelectorAll(".sec4Img")[5];
    if (img.src.endsWith('a6.webp')) {
      img.src = 'a6-gold.webp';
    } else {
      img.src = 'a6.webp';
    }
}
function toggleImage7() {
    const img = document.querySelectorAll(".sec4Img")[6];
    if (img.src.endsWith('a7.webp')) {
      img.src = 'a7-gold.webp';
    } else {
      img.src = 'a7.webp';
    }
}
function toggleImage8() {
    const img = document.querySelectorAll(".sec4Img")[7];
    if (img.src.endsWith('a8.webp')) {
      img.src = 'a8-gold.webp';
    } else {
      img.src = 'a8.webp';
    }
}
function toggleImage9() {
    const img = document.querySelectorAll(".sec4Img")[8];
    if (img.src.endsWith('a9.webp')) {
      img.src = 'a9-gold.webp';
    } else {
      img.src = 'a9.webp';
    }
}
function toggleImage10() {
    const img = document.querySelectorAll(".sec4Img")[9];
    if (img.src.endsWith('a10.webp')) {
      img.src = 'a10-gold.webp';
    } else {
      img.src = 'a10.webp';
    }
}
function toggleImage11() {
    const img = document.querySelectorAll(".sec4Img")[10];
    if (img.src.endsWith('a11.webp')) {
      img.src = 'a11-gold.webp';
    } else {
      img.src = 'a11.webp';
    }
}
function toggleImage13() {
    const img = document.querySelectorAll(".sec3Img")[1];
    if (img.src.endsWith('Cargo-Barging-Business.webp')) {
      img.src = 'Cargo-Barging-Gold.webp';
    } else {
      img.src = 'Cargo-Barging-Business.webp';
    }
}
function toggleImage14() {
    const img = document.querySelectorAll(".sec3Img")[0];
    if (img.src.endsWith('Cargo-Plane-Business.webp')) {
      img.src = 'Cargo-Plane-Gold.webp';
    } else {
      img.src = 'Cargo-Plane-Business.webp';
    }
}
function toggleImage15() {
    const img = document.querySelectorAll(".sec3Img")[2];
    if (img.src.endsWith('Cargo-Rail-Business.webp')) {
      img.src = 'Cargo-Rail-Gold.webp';
    } else {
      img.src = 'Cargo-Rail-Business.webp';
    }
}
function toggleImage16() {
    const img = document.querySelectorAll(".sec3Img")[4];
    if (img.src.endsWith('Cargo-Ship-Business.webp')) {
      img.src = 'Cargo-Ship-Gold.webp';
    } else {
      img.src = 'Cargo-Ship-Business.webp';
    }
}
function toggleImage17() {
    const img = document.querySelectorAll(".sec3Img")[3];
    if (img.src.endsWith('Cargo-Truck-Business.webp')) {
      img.src = 'Cargo-Truck-Gold.webp';
    } else {
      img.src = 'Cargo-Truck-Business.webp';
    }
}