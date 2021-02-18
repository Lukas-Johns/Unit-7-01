let dog = 0;
let cat = 0;
document.getElementById('press').addEventListener('click', myInput)
function myInput() {
  dog = Math.floor(Math.random() * 7) + 1;
  cat = document.getElementById('mine').value;
  cat = parseInt(cat);
  if (dog === cat) {
  alert('your answer matched! you got it!')
} else {
  alert('no match. you lose...')
}
}