let dark__btn = document.getElementById("theme_dark");
let light__btn = document.getElementById("theme_light");
let bodyElm = document.querySelector("body");

dark__btn.addEventListener("click", () => {
  if (!dark__btn.classList.contains("active")) {
    dark__btn.classList.add("active-btn");
    bodyElm.classList.add("dark");
    light__btn.classList.remove("active-btn");
  }
});
light__btn.addEventListener("click", () => {
  bodyElm.classList.remove("dark");
  dark__btn.classList.remove("active-btn");
  light__btn.classList.add("active-btn");
});

// animate circle:
let isScrolled = false;
const windowH = window.innerHeight + 20;
const cta = document.querySelector(".cta__circle");
let ctaOffSet = cta.getBoundingClientRect().top;
let cir = document.querySelectorAll("#cta_c");
let circle__inner = document.querySelector(".circle__innerText");
let innerValue = parseInt(circle__inner.innerText);

window.addEventListener("scroll", () => {
  let circle__inner = document.querySelector(".circle__innerText");
  let innerValue = parseInt(circle__inner.innerText);
  const windowH = window.innerHeight + 20;
  const cta = document.querySelector(".cta__circle");
  let ctaOffSet = cta.getBoundingClientRect().top;
  let cir = document.querySelectorAll("#cta_c");
  if (windowH > ctaOffSet && !isScrolled) {
    let start = 0;
    //  circle animation
    cir.forEach((e) => {
      const first = setInterval(() => {
        start++;
        if (start <= innerValue) {
          circle__inner.innerHTML = `${start}%`;
        }
        let endNumber = e.dataset.value;

        if (start >= endNumber) {
          clearInterval(first);
        }
        if (endNumber == 0) {
          e.style.background = "white";
        } else {
          e.style.background = `conic-gradient(var(--clr-primary-${
            e.dataset.color
          }) ${start * 3.6}deg,#f3f0ff 0deg)`;
        }

        isScrolled = true;
      }, 40);
    });
  }
});

// progress bar  animation
// const range = document.querySelectorAll(".range");
let after = document.querySelectorAll(".after");
console.log(after)
setInterval(() => {
  after.forEach((e) => {
    let progressPercentage = parseInt(e.dataset.range);
    for (let i = 0; i < progressPercentage; i++) {
      e.style.width = `${i}%`;
    }
  });
}, 500);
