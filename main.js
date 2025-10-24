document.querySelector(".control-btn span").onclick = function () {
  let name = prompt("من فضلك أدخل الإسم :");
  if (name === "") {
    document.querySelector(".name span").innerHTML = "غير معروف";
  } else {
    document.querySelector(".name span").innerHTML = name;
  }
  document.querySelector(".control-btn").remove();
  document.getElementById("backgruod").play();
  one();
};

let time = 1000;
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
  }, 1500);
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
  if (select.className === "matsh") {
    console.log("on");
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

