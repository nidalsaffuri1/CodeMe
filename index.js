"use strict";

const subsection31 = document.querySelectorAll(".subsection31");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const brainf = document.getElementById("brain-f");
const subsection32 = document.querySelectorAll(".subsection32");

for (let i = 0; i < subsection32.length; i++) {
  subsection32[i].classList.remove("brf");
}

const promtM = function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
};

for (let i = 0; i < subsection31.length; i++) {
  subsection31[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

overlay.addEventListener("click", promtM);
closeModal.addEventListener("click", promtM);
document.querySelector("body").addEventListener("keydown", function (e) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

for (let i = 0; i < subsection32.length; i++) {
  subsection32[i].addEventListener("click", function () {
    subsection32[i].classList.toggle("brf");
  });
}
