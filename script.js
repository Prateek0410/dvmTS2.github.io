const skew1 = document.querySelector(".sec9-content1");
const skew2 = document.querySelector(".sec9-content2");
const skew3 = document.querySelector("#a");
const skew4 = document.querySelector("#b");
const skew5 = document.querySelector("#c");
skew1.addEventListener("mousemove",(e)=>{
    mouseTrack(e,skew1);
});
skew2.addEventListener("mousemove",(e)=>{
    mouseTrack(e,skew2);
});
skew3.addEventListener("mousemove",(e)=>{
    mouseTrack(e,skew3);
});
skew4.addEventListener("mousemove",(e)=>{
    mouseTrack(e,skew4);
});
skew5.addEventListener("mousemove",(e)=>{
    mouseTrack(e,skew5);
});
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
    nav.style.display = 'none';
} else {
    const nav = document.querySelector('.nav');
    nav.style.display = 'block';
   /* const navBottom = document.querySelector('.nav-bottom');
    navBottom.style.padding = '24px 40px';*/
  }
  oldScrollY = window.scrollY;
}

const headers = document.querySelectorAll('.accordian-header');
const contents = document.querySelectorAll('.sec-one-subflex1-content-txt');

headers.forEach((head)=>{
    head.addEventListener("click",()=>{
        const item = head.parentElement;
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
        setTimeout(() => {
            contents[0].classList.remove("active");
        }, 25000);
    }, 0+100000*i);
    setTimeout(() => {
        contents[1].classList.add("active");
        setTimeout(() => {
            contents[1].classList.remove("active");
        }, 25000);
    }, 25000+100000*i);
    setTimeout(() => {
        contents[2].classList.add("active");
        setTimeout(() => {
            contents[2].classList.remove("active");
        }, 25000);
    }, 50000+100000*i);
    setTimeout(() => {
        contents[3].classList.add("active");
        setTimeout(() => {
            contents[3].classList.remove("active");
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