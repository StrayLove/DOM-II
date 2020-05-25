

// scroll to get hella cool background color in html
 const body = document.querySelector("body");
 window.addEventListener("scroll", () => {
   body.style.backgroundImage = "linear-gradient(red, yellow, blue)";
 });


//tried to do drag and drop a different way. didn't work and 
//idk why. wish i did. if you got a note lmk
/*function onDragStart(event){
  event
  .dateTransfer
  .setData('text/plain', event.start.id);

  event
  .currentTarget
  .style
  .backgroundColor = yellow;
}

function onDragOver(event){
  event.preventDefault();
}

function onDrop(event){
  const id = event
  .dataTransfer
  .getData('text');

  const draggableElement = document.getElementsById(Id);
  const dragZone = event.target;

  dropzone.appendChild(draggableElement);

  event
  .dataTransfer
  .clearData();
}*/


 //animates the lower img




 // drag and drop the nav bar items. thats fun
 var dragged;

 document.addEventListener("drag", function(event){

 }, false);

 document.addEventListener("dragstart", function(event){
     dragged = event.target;
     event.target.style.opacity = .5;
 }, false);
 
 document.addEventListener("dragend", function(event) {
    event.target.style.opacity = "";
  }, false);

  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function(event) {
    if (event.target.className == "nav") {
      event.target.style.background = "orange";
    }
 }, false);

 document.addEventListener("dragleave", function(event) {
    if (event.target.className == "nav") {
      event.target.style.background = "";
    }
  
  }, false);
  
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if (event.target.className == "nav") {
      event.target.style.background = "";
      dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
    }
  }, false);
  

//click the header to change the color
  const header = document.querySelector('header');
 header.addEventListener(
     'click', () => {
         header.style.background = "teal";
     }
 )

/*planning on an animation idea later once i figure it out. XD
for now ill just leave the code commented out.
const animation = querySelector('h1.animation')

let iterationCount = 0;

animation.addEventListener('animationstart', () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation started' `;
});

animation.addEventListener('animationiteration', () => {
  iterationCount++;
  animationEventLog.textContent = `${animationEventLog.textContent}'animation iterations: ${iterationCount}' `;
});

animation.addEventListener('animationend', () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation ended'`;
  animation.classList.remove('active');
  applyAnimation.textContent = "Activate animation";
});

animation.addEventListener('animationcancel', () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation canceled'`;
});

applyAnimation.addEventListener('click', () => {
  animation.classList.toggle('active');
  animationEventLog.textContent = '';
  iterationCount = 0;
  let active = animation.classList.contains('active');
  if (active) {
    applyAnimation.textContent = "Cancel animation";
  } else {
    applyAnimation.textContent = "Activate animation";
  }
});*/


//did all 3 buttons lol
let button = document.querySelector('.btn');
button.addEventListener('click',()=>{alert('Just a moment')})

let button2 = document.querySelector('.btn');
 button2.addEventListener('click',()=>{alert('i am looking for the button')})

 let button3 = document.querySelector('.btn');
 button2.addEventListener('click',()=>{alert('no, no button for chu!')})


//adding animation to the body
/*let body = document.querySelector("body")
body.addEventListener("mouseover", function( event ) {   
    event.target.classList.add("pyro")
    setTimeout(function() {
    event.target.classList.remove("pyro")
    }, 4000);
}, false);*/



/*let logo = document.querySelector("h1");
logo.addEventListener("mouseover", function( event ) {   
    event.target.classList.add("wobble-hor-bottom")
    setTimeout(function() {
    event.target.classList.remove("wobble-hor-bottom")
    }, 1500);
}, false);*/



//top img spins on double click lol
let firstimg = document.querySelector("img")

let anim = gsap.to(firstimg, 1, {
    x:0,
    opacity:1,
    rotation: 360,
    paused: true,
})
firstimg.addEventListener("dblclick", function( event ) {   
  anim.play()
  anim.restart()
}, false);



//the content slides out 
let contentp = document.querySelector(".content-section p")

let nestedyoyo = gsap.to(".content-section p", 1, {
    x: 200,
    opacity:1,
    paused: true, 
    yoyo: true,
    repeat: 1,
})

//stops propagation so you can wheel the inner paragraph tags without the outside, or separately
contentp.addEventListener("wheel", function( event ) {   
    event.stopPropagation();
    nestedyoyo.play();
    nestedyoyo.restart();
}, false);



//ok get out of town. lol. scroll and mouseover at the buttons. that's funny
let content = document.querySelector(".content-section")

let yoyo = gsap.to(".content-section", 1, {
    x: 200,
    opacity:1,
    paused: true,
    yoyo: true,
    repeat: 1,
})
content.addEventListener("wheel", function( event ) {   
    yoyo.play()
    yoyo.restart()
}, false);


let buttons = document.querySelectorAll(".destination .btn")

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("mouseenter", function( event ) {   
        let banim = gsap.to(buttons[i], 1, {
            rotation: 180,
            opacity:1,
            paused: true,
            yoyo: true,
            repeat: 1,
        })
        banim.play()
        banim.restart()
    }, false);
}


//lmao scales the h2, h4 and div class animate. 
var scales = [{scale:1.6}, {scale:0.2}, {scale:1}];

gsap.to('.animate', {
    motionPath: {
        path: scales, 
        curviness: 0
    }, 
    duration: 3, 
    ease: "none",
    repeat: -1,
    repeatDelay: 1
});

gsap.to('h4', {
    motionPath: {
        path: scales, 
        curviness: 2
    }, 
    duration: 3, 
    ease: "none",
    repeat: -1,
    repeatDelay: 1
});

gsap.to('h2',{
  motionPath: {
    path: scales,
    curviness: 2
  },
    duration: 3,
    ease: "none",
    repeat: -1,
    repeatDelay: 1
});



//playing with the footer
 const footp = document.querySelector('footer p');
 let hellbus = false;
 footp.addEventListener('mouseover', function(){
     if(hellbus === false){
         footp.style.color = 'red';
         footp.textContent = 'Copyright Hell Bus 666';
         hellbus = true;
     }
 })
 footp.addEventListener('mouseup', function(){
         if(hellbus === true){
             footp.textContent = 'Copyright Fun Bus 2020';
             hellbus = false;
         }
     }
 ) 


 //preventDefault
const aTags = document.querySelectorAll('.nav-link');

  for(let i = 0; i <= 3; i++){
     aTags[i].addEventListener('click', (event)=>{
         event.preventDefault()
     })
 }

