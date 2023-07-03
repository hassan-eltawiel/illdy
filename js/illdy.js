//progress
let aboutSection = document.querySelector(".about");
let progressBar = document.querySelectorAll(".progress-bar")




function progress() {
  let aboutSectionDetals = aboutSection.getBoundingClientRect();
  progressBar.forEach((e)=>{
    let precent = e.dataset.precent;
    if (aboutSectionDetals.bottom <= (window.innerHeight)) {
        e.style.width = precent;
        e.innerHTML= precent;
      }else {
        e.style.width = "0";
        e.innerHTML= "";
    }
  })
}

// counter
let nums = document.querySelectorAll(".counter .num");
let counter = document.querySelector(".counter");

let started = false;

function count() {
  let counterDetals = counter.getBoundingClientRect();
  if (counterDetals.bottom <= (window.innerHeight )) {
      if (!started) {
          nums.forEach((num) => {
            startCount(num);
          })
      }
      started = true;
  }
}
function startCount(num) {
    let goal = num.dataset.goal;
    let count = setInterval(() => {
        num.textContent++;
        if (num.textContent == goal ) {
          clearInterval(count);
        }
    }, 2000 / goal);
}

//main event
window.onscroll = ()=> {
  progress();
  count();
};


//contact us
let inputs = document.querySelectorAll(".contactUs .form-control");
let submit = document.querySelector(".send");

submit.addEventListener("click" , ()=>{
  inputs.forEach((e) => {
    e.value = "";
  })
});
