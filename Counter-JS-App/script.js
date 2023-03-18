const cand = document.querySelector("#result");

//writing two function

function decrement() {
  let x = parseInt(cand.innerHTML);
  x = x - 1;
  cand.innerHTML = x;
}

function increment() {
  let x = parseInt(cand.innerHTML);
  x = x + 1;
  cand.innerHTML = x;
}

function reset() {
  cand.innerHTML = 0;
}
