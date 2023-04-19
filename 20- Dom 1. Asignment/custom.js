const container = document.querySelector(".container");
const title = document.querySelector(".title");
const title2 = document.querySelector("#title2");
const imgContent = document.querySelector(".img-content");
const imgInner = document.querySelector(".inner-img");
const buttons = document.querySelector(".btn");
const call = document.querySelector(".btn-call");
const musicplay = document.querySelector("#playBtn");
const musicstop = document.querySelector("#stopBtn");
const connect = document.querySelector(".btn-connect");
const talk = document.querySelector(".btn-talk");

const audio = new Audio("./img/retro-ringtone.mp3");

title.onclick = () => {
  title2.style.textAlign = "center";
  title2.style.color = "red";
  title2.style.fontSize = "2.5rem";
  title2.style.fontWeight = "900";
  title2.style.textTransform = "uppercase";
};

imgContent.onmouseover = () => {
  imgInner.src = "./img/aslan1.jpeg";
};

imgContent.onmouseout = () => {
  imgInner.src = "./img/aslan2.jpeg";
};

call.onclick = () => {
  imgInner.src = "./img/img5.gif";
  call.style.backgroundColor = "red";
};


// musicplay.onclick = () => {
//   audio.play();
// };

// musicstop.onclick = () => {
//   audio.pause();
// };

musicplay.addEventListener("click", function () {
  audio.play();
});

musicstop.addEventListener("click", function () {
  audio.pause();
});

connect.onclick = () => {
  imgInner.src = "./img/clock.gif";
};

talk.onclick = () => {
  imgInner.src = "./img/telefon.gif";
};
