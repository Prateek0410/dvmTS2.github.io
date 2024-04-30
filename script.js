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
    //console.log(x,y);
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
    })
});
for(var i=0;i<1000;i++){
    setTimeout(() => {
        contents[0].classList.add("active");
        headers[0].style.opacity = "1";
        setTimeout(() => {
            contents[0].classList.remove("active");
            headers[0].style.opacity = "0.4";
        }, 25000);
    }, 0+100000*i);
    setTimeout(() => {
        contents[1].classList.add("active");
        headers[1].style.opacity = "1";
        setTimeout(() => {
            contents[1].classList.remove("active");
            headers[1].style.opacity = "0.4";
        }, 25000);
    }, 25000+100000*i);
    setTimeout(() => {
        contents[2].classList.add("active");
        headers[2].style.opacity = "1";
        setTimeout(() => {
            contents[2].classList.remove("active");
            headers[2].style.opacity = "0.4";
        }, 25000);
    }, 50000+100000*i);
    setTimeout(() => {
        contents[3].classList.add("active");
        headers[3].style.opacity = "1";
        setTimeout(() => {
            contents[3].classList.remove("active");
            headers[3].style.opacity = "0.4";
        }, 25000);
    }, 75000+100000*i);
}
const lineOne = document.querySelector("#one");
const lineTwo = document.querySelector("#two");
const lineThree = document.querySelector("#three");
const lineFour = document.querySelector("#four");
for(var i=0;i<1000;i++){
    setTimeout(() => {
        lineOne.classList.add("active");
        setTimeout(() => {
            lineOne.classList.remove("active");
        }, 25000);
    }, 0+100000*i);
    setTimeout(() => {
        lineTwo.classList.add("active");
        setTimeout(() => {
            lineTwo.classList.remove("active");
        }, 25000);
    }, 25000+100000*i);
    setTimeout(() => {
        lineThree.classList.add("active");
        setTimeout(() => {
            lineThree.classList.remove("active");
        }, 25000);
    }, 50000+100000*i);
    setTimeout(() => {
        lineFour.classList.add("active");
        setTimeout(() => {
            lineFour.classList.remove("active");
        }, 25000);
    }, 75000+100000*i);
}

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

const h2Img = document.querySelectorAll(".h2-imgtag");
for(var i=0;i<1000;i++){
    setTimeout(() => {
        h2Img[0].classList.add("active");
        setTimeout(() => {
            h2Img[0].classList.remove("active");
        }, 25000);
    }, 0+100000*i);
    setTimeout(() => {
        h2Img[1].classList.add("active");
        setTimeout(() => {
            h2Img[1].classList.remove("active");
        }, 25000);
    }, 25000+100000*i);
    setTimeout(() => {
        h2Img[2].classList.add("active");
        setTimeout(() => {
            h2Img[2].classList.remove("active");
        }, 25000);
    }, 50000+100000*i);
    setTimeout(() => {
        h2Img[3].classList.add("active");
        setTimeout(() => {
            h2Img[3].classList.remove("active");
        }, 25000);
    }, 75000+100000*i);
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
