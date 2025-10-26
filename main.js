document.querySelector(".control-btn span").onclick = function () {
  let name = prompt("من فضلك أدخل الإسم :");
  if (name === "") {
    document.querySelector(".name span").innerHTML = "غير معروف";
  } else {
    document.querySelector(".name span").innerHTML = name;
  }
  document.querySelector(".control-btn").style.display = "none";
  document.getElementById("backgruod").play();
  one();
  let e = setInterval(timer, 1000);
  function timer() {
    T.innerHTML -= 1;
    if (T.innerHTML === "0") {
      clearInterval(e);
      win();
      window.location.reload();
    }
  }
};

let time = 1000;
let T = document.querySelector(".timer span");
let blockCont = document.querySelector(".blocks");
let blocks = Array.from(blockCont.children);
let range = [...Array(blocks.length).keys()];

function one() {
  blocks.forEach((ch) => {
    ch.classList.add("fileb");
  });
  setTimeout(() => {
    blocks.forEach((ch) => {
      ch.classList.remove("fileb");
    });
  }, 3000);
}

swip(range);

function swip(array) {
  let curent = array.length,
    temp,
    random;
  while (curent > 0) {
    random = Math.floor(Math.random() * curent);
    curent--;
    temp = array[curent];
    array[curent] = array[random];
    array[random] = temp;
  }
  return array;
}

function flib(select) {
  select.classList.add("fileb");
  let isFieb = blocks.filter((fliebBlock) =>
    fliebBlock.classList.contains("fileb")
  );
  if (isFieb.length === 2) {
    stop();
    check(...isFieb);
  }
}

function stop() {
  blockCont.classList.add("stop");
  setTimeout(() => {
    blockCont.classList.remove("stop");
  }, time);
}

function check(one, two) {
  let tray = document.querySelector(".try span");
  if (one.dataset.img === two.dataset.img) {
    one.classList.remove("fileb");
    two.classList.remove("fileb");
    one.classList.add("matsh");
    two.classList.add("matsh");
    document.getElementById("secsess").play();
  } else {
    tray.innerHTML = parseInt(tray.innerHTML) + 1;
    setTimeout(() => {
      one.classList.remove("fileb");
      two.classList.remove("fileb");
    }, time);
    document.getElementById("fail").play();
  }
}

blocks.forEach((block, index) => {
  block.style.order = range[index];
  block.addEventListener("click", function () {
    flib(block);
  });
});

function win() {
  let i = 0;
  blocks.filter((d) => {
    if (d.classList.contains("matsh")) {
      i++;
    } else {
      i = 0;
    }
  });
  if (i === 19) {
    alert(`مبروك لقد أنهيت اللعبة، صل علي الحبيب محمد`);
  } else {
    alert(`مبروك لقد خسرت اللعبة بس مش مهم المهم صحتك يا غالي، صل علي النبي`);
  }
}

