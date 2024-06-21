const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  // progress.style.width =
  //   ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}



const selectAllBox = Array.from(document.getElementsByClassName("Employemnt-boxs"));

// Select all box elements

// Add click event listeners to each box
selectAllBox.forEach(box => {
  box.addEventListener('click', () => {
    // Remove 'color' class from all boxes
    selectAllBox.forEach(otherBox => {
      if (otherBox !== box) {
        otherBox.classList.remove('color');
        otherBox.style.border = '1px solid #aeaeae'; // Reset background color
        otherBox.style.backgroundColor = '#fff';
      }
    });

    // Toggle 'color' class on the clicked box
    box.classList.toggle('color');
    console.log(box.querySelector("h6").textContent)

    // Set background color based on 'color' class
    if (box.classList.contains('color')) {
      box.style.border = '1px solid #235d80';
      box.style.backgroundColor = '#EBF9FF';
    } else {
      box.style.border = '1px solid #aeaeae'; // Reset background color
      box.style.backgroundColor = '#fff';
    }
  });
});

