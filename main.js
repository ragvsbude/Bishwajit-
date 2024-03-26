const target = document.getElementById ('target');
const yes = document.getElementById ('yes');

yes.addEventListener('click',function(){
  alert("I Love you too 😍❤️🥰")
})

function moveTarget() {
  const maxWidth = 400;
  const maxHeight = 400;
  
  const ranomX=Math.floor(Math.random()*maxWidth);
  const ranomY=Math.floor(Math.random()*maxWidth);
  
  target.style.left = ranomX +'px';
  target.style.top = ranomY +'px';
}

target.addEventListener('mouseenter',function(){
  moveTarget();
})