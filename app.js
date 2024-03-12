let toggle = document.querySelector('#toggle');
let body = document.body;

let light = false;

toggle.addEventListener('click',() => {
    light = !light;
    if (!light) {
        body.style.backgroundColor = "white";
    } else {
        body.style.backgroundColor = "black";
    }
});





let count = 0;

function plus(num) {
  count += num;
  document.querySelector('.counterNum').innerHTML = count;
}

function minus(num) {
  count += num;
  document.querySelector('.counterNum').innerHTML = count
}
document.querySelector('.minus').disabled = count <= 0;
