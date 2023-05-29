
var tl = gsap.timeline();
tl.from("#loader img", {
    scale: 0,
    duration: 1,
})
.to("#loader", {
    y: -800,
    duration: 1,
    delay: 1,
    opacity: 0.8,
})
.from("#right", {
    x: 700,
    opacity: 0.8,
    duration: 0.5,
}, '-=.2')

.from("#nav", {
    y: -60,
    duration: 0.5,
    opacity: 0.6,
}, '-=.2')
.from("#left1", {
    x: -500,
    duration: 1,
    opacity: 0.7,
}, '-=.2')
.from("#bottom", {
    y: 100,
    opacity: 0.8,
    duration: 0.5,

}, '-=.2')

.from("#main>img", {
    x: 700,
    rotate:120,
    scale: 0.5,
    opacity: 0,
    duration: 0.9,
}, '-=1.5')
.from("#main h3", {
        x: -600,
        duration: 0.9,
    },'-=1.5')