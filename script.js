let butonPlus = document.querySelector(".buton-plus");
let butonMinus = document.querySelector(".buton-minus");
let butonInmultire = document.querySelector(".buton-inmultire");
let butonImpartire = document.querySelector(".buton-impartire");
let butonResetare = document.querySelector('.buton-resetare');
let cifraCalculator = document.querySelector(".cifra-calculator");
let valoareCurenta = document.getElementById('valoare-curenta');

let x = 0;

let plusUnu = () => {
  x++;
  cifraCalculator.innerText = x;
  if (x <= -10) {
    cifraCalculator.style.color = 'red';
    cifraCalculator.style.fontSize = "48px";
  }
  else if (x >= -10 && x <= 10) {
    cifraCalculator.style.color = 'black';
    cifraCalculator.style.fontSize = "60px";
  }
  else if (x >= 10) {
    cifraCalculator.style.color = 'green';
    cifraCalculator.style.fontSize = "82px";
  }
};

let minusUnu = () => {
  x--;
  cifraCalculator.innerText = x;
  if (x <= -10) {
    cifraCalculator.style.color = 'red';
    cifraCalculator.style.fontSize = "48px";
  }
  else if (x >= -10 && x <= 10) {
    cifraCalculator.style.color = 'black';
    cifraCalculator.style.fontSize = "60px";
  }
  else if (x >= 10) {
    cifraCalculator.style.color = 'green';
    cifraCalculator.style.fontSize = "82px";
  }

  if (x <= -20) {
    x = -19; // Limitez valoarea la -20
  }
};

let y = 2;

let inmultitCuDoi = () => {
  x = x * y;
  cifraCalculator.innerText = x;
  if (x <= -10) {
    cifraCalculator.style.color = 'red';
    cifraCalculator.style.fontSize = "48px";
  }
  else if (x >= -10 && x <= 10) {
    cifraCalculator.style.color = 'black';
    cifraCalculator.style.fontSize = "60px";
  }
  else if (x >= 10) {
    cifraCalculator.style.color = 'green';
    cifraCalculator.style.fontSize = "82px";
  }
};

let impartitLaDoi = () => {
  x = x / 2;
  cifraCalculator.innerText = x;
  if (x <= -10) {
    cifraCalculator.style.color = 'red';
    cifraCalculator.style.fontSize = "48px";
  }
  else if (x >= -10 && x <= 10) {
    cifraCalculator.style.color = 'black';
    cifraCalculator.style.fontSize = "60px";
  }
  else if (x >= 10) {
    cifraCalculator.style.color = 'green';
    cifraCalculator.style.fontSize = "82px";
  }
};

let updateValoareCurenta = () => {
  valoareCurenta.innerText = x;
};

let resetValoare = () => {
  x = 0;
  cifraCalculator.innerText = x;
  cifraCalculator.style.color = 'black';
  updateValoareCurenta();
};

butonPlus.addEventListener("click", plusUnu);
butonMinus.addEventListener('click', minusUnu);
butonInmultire.addEventListener("click", inmultitCuDoi);
butonImpartire.addEventListener("click", impartitLaDoi);
butonResetare.addEventListener('click', resetValoare);