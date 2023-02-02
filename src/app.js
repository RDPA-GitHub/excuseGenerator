
window.onload = function () {
  //write your code here
  document.getElementById("excuse_2").innerHTML = excuseGeneraor();
};


let excuseGeneraor = () => {
  // BSD de Excusas
    let who = ['The Dog', 'My Granma', 'His Turtle', 'My Bird'];
    let what = ['eat', 'pissed', 'crushed', 'broked'];
    let when = ['before the class', 'right in the time', 'when I finished', 'during my lunch', 'while I was playing'];

  // Concatenacion de Excusas
    let Excusa = `${who[Math.floor(Math.random()*who.length)]} ${what[Math.floor(Math.random()*what.length)]} ${when[Math.floor(Math.random()*when.length)]}`;

  return Excusa;
} 