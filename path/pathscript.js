
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ease: "none"});
const pulses = gsap.timeline({
  defaults: {
    duration: 0.05, 
    autoAlpha: 1, 
    scale: 2, 
    transformOrigin: 'center', 
    ease: "elastic(2.5, 1)"
  }})
.to(".ball02, .text01, #b1", {}, 0.2) 
.to(".ball03, .text02, #b2", {}, 0.33)
.to(".ball04, .text03, #b3", {}, 0.46)

const main = gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svg",
    scrub: true,
    start: "top center",
    end: "bottom center"
  }})
.to(".ball01", {duration: 0.01, autoAlpha: 1})
.from(".theLine", {drawSVG: 0}, 0)
.to(".ball01", {motionPath: {
  path: ".theLine", 
  align:".theLine",
  alignOrigin: [0.5, 0.5],
}}, 0)
.add(pulses, 0);


// it is the count of level
var p = 0;

document.getElementbyId("t1").addEventListener("mouseover", Mouseover1); 

function Mouseover1(){
window.location = "https://roadmap.sh/";
}
Mouseover1();






