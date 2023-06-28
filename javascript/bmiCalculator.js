// bmi calculator script
const calcBtnEl = document.querySelector("#calculate");

calcBMI = function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Please fill out the output fields in appropriate way!");
    return;
  }

  // BMI = weight in KG / (height in m * height in m)

  height = height / 100; //convert m to cm

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2); //round 2 places

  document.querySelector("#result").innerHTML = BMI;

  function removeUnderline() {
    document.querySelector(".resultUnderweight").style.textDecoration = "none";
    document.querySelector(".resultHealthy").style.textDecoration = "none";
    document.querySelector(".resultOverwegiht").style.textDecoration = "none";
    document.querySelector(".resultObese").style.textDecoration = "none";
  }

  let status = "";

  if (BMI < 18.5) {
    removeUnderline();
    status = "Underweight";
    document.querySelector(".resultUnderweight").style.textDecoration =
      "underline";
  } else if (BMI >= 18.5 && BMI < 25) {
    removeUnderline();
    status = "Heatlhy";
    document.querySelector(".resultHealthy").style.textDecoration = "underline";
  } else if (BMI >= 25 && BMI < 30) {
    removeUnderline();
    status = "Overweight";
    document.querySelector(".resultOverwegiht").style.textDecoration =
      "underline";
  } else if (BMI >= 30) {
    removeUnderline();
    status = "Obese";
    document.querySelector(".resultObese").style.textDecoration = "underline";
  }

  document.querySelector(
    ".comment"
  ).innerHTML = `You are <span id="comment">${status}</span>`;
};

calcBtnEl.addEventListener("click", calcBMI);
