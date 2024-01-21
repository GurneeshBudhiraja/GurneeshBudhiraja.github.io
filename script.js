const sentences = ["Passionate web developer with expertise in Python, HTML, CSS, and JavaScript.","Dedicated to continuous learning.","Crafting exceptional digital experiences through self-taught proficiency."];
let typingElement = document.querySelector('#web-dev'); // typing effect div
const glide = document.querySelector('.glide');

// typewriter
var typewriter = new Typewriter(typingElement, {
  loop: true,
  autoStart: true,
  delay:50
});
for (sentence of sentences) {
typewriter.typeString(sentence)
    .pauseFor(100)
    .deleteAll(40)
    .start()
}
// slider
new Glide(glide,{
animationDuration: 1000,
autoplay:1500,
type: 'carousel',
startAt: 1,
perView: 3,

}).mount()
