// get the final result and append a div under quiz
function result() {
  let q1 = document.getElementsByName('freq-opt-q1');
  let q2 = document.getElementsByName('freq-opt-q2');
  let q3 = document.getElementsByName('freq-opt-q3');
  let q4 = document.getElementsByName('freq-opt-q4');
  let q5 = document.getElementsByName('freq-opt-q5');
  let q6 = document.getElementsByName('freq-opt-q6');
  let q7 = document.getElementsByName('freq-opt-q7');
  let q8 = document.getElementsByName('freq-opt-q8');
  let q9 = document.getElementsByName('freq-opt-q9');
  let q10 = document.getElementsByName('freq-opt-q10');
  let q11 = document.getElementsByName('freq-opt-q11');
  let q12 = document.getElementsByName('freq-opt-q12');

  let q1IsChecked = q1[0].checked || q1[1].checked || q1[2].checked || q1[3].checked;
  let q2IsChecked = q2[0].checked || q2[1].checked || q2[2].checked || q2[3].checked;
  let q3IsChecked = q3[0].checked || q3[1].checked || q3[2].checked || q3[3].checked;
  let q4IsChecked = q4[0].checked || q4[1].checked || q4[2].checked || q4[3].checked;
  let q5IsChecked = q5[0].checked || q5[1].checked || q5[2].checked || q5[3].checked;
  let q6IsChecked = q6[0].checked || q6[1].checked || q6[2].checked || q6[3].checked;
  let q7IsChecked = q7[0].checked || q7[1].checked || q7[2].checked || q7[3].checked;
  let q8IsChecked = q8[0].checked || q8[1].checked || q8[2].checked || q8[3].checked;
  let q9IsChecked = q9[0].checked || q9[1].checked || q9[2].checked || q9[3].checked;
  let q10IsChecked = q10[0].checked || q10[1].checked || q10[2].checked || q10[3].checked;
  let q11IsChecked = q11[0].checked || q11[1].checked || q11[2].checked || q11[3].checked;
  let q12IsChecked = q12[0].checked || q12[1].checked || q12[2].checked || q12[3].checked;

  if (!q1IsChecked) {
    alert('Please answer Q1!');
    return;
  }
  if (!q2IsChecked) {
    alert('Please answer Q2!');
    return;
  }
  if (!q3IsChecked) {
    alert('Please answer Q3!');
    return;
  }
  if (!q4IsChecked) {
    alert('Please answer Q4!');
    return;
  }
  if (!q5IsChecked) {
    alert('Please answer Q5!');
    return;
  }
  if (!q6IsChecked) {
    alert('Please answer Q6!');
    return;
  }
  if (!q7IsChecked) {
    alert('Please answer Q7!');
    return;
  }
  if (!q8IsChecked) {
    alert('Please answer Q8!');
    return;
  }
  if (!q9IsChecked) {
    alert('Please answer Q9!');
    return;
  }
  if (!q10IsChecked) {
    alert('Please answer Q10!');
    return;
  }
  if (!q11IsChecked) {
    alert('Please answer Q11!');
    return;
  }
  if (!q12IsChecked) {
    alert('Please answer Q12!');
    return;
  }

  // select all radio buttons
  let radioButtons = document.querySelectorAll('input[type=radio]');

  // create an array to store the checked radio button values
  // let checkedValues = [];
  let totalPoint = 0;

  // loop through all radio buttons
  for (let i = 0; i < radioButtons.length; i++) {
    // check if radio button is checked
    if (radioButtons[i].checked) {
      // store the checked radio button value in the array
      // checkedValues.push(radioButtons[i].value);

      // 根據答案自加分數
      totalPoint += Number(radioButtons[i].value);
    }
  }

  // print the array of checked radio button values
  // console.log(checkedValues);
  // console.log(totalPoint);

  const resultDivEl = document.getElementById("result");
  resultDivEl.style.display = "block";

  const scoreEl = document.querySelector(".score");
  scoreEl.innerHTML = null;
  if (totalPoint == "0" || totalPoint == "1") {
    scoreEl.append(" " + totalPoint + " point");
  } else
    scoreEl.append(" " + totalPoint + " points");

  const commentEl = document.querySelector(".comment");
  commentEl.innerHTML = null;
  if (totalPoint <= 12) {
    commentEl.append("0-12 points, miserable! Crap! Your eating behavior is very bad, it is recommended to make up your mind to lose weight.");
  } else if (totalPoint <= 20) {
    commentEl.append("13-20 points, although you are a little better than 0-12 points, don't \"laugh like a turtle without a tail\", please try to change your eating habits.")
  } else if (totalPoint <= 30) {
    commentEl.append("21-30 points, come on! come on! It will be even better if the eating habits continue to improve the small deficiencies.")
  } else
    commentEl.append("31-36 points, you are awesome! Please persevere, you can easily get healthy!");
}

// get the final result and append a div under quiz
function resultPC() {
  let q1 = document.getElementsByName('freq-opt-q1-pc');
  let q2 = document.getElementsByName('freq-opt-q2-pc');
  let q3 = document.getElementsByName('freq-opt-q3-pc');
  let q4 = document.getElementsByName('freq-opt-q4-pc');
  let q5 = document.getElementsByName('freq-opt-q5-pc');
  let q6 = document.getElementsByName('freq-opt-q6-pc');
  let q7 = document.getElementsByName('freq-opt-q7-pc');
  let q8 = document.getElementsByName('freq-opt-q8-pc');
  let q9 = document.getElementsByName('freq-opt-q9-pc');
  let q10 = document.getElementsByName('freq-opt-q10-pc');
  let q11 = document.getElementsByName('freq-opt-q11-pc');
  let q12 = document.getElementsByName('freq-opt-q12-pc');

  let q1IsChecked = q1[0].checked || q1[1].checked || q1[2].checked || q1[3].checked;
  let q2IsChecked = q2[0].checked || q2[1].checked || q2[2].checked || q2[3].checked;
  let q3IsChecked = q3[0].checked || q3[1].checked || q3[2].checked || q3[3].checked;
  let q4IsChecked = q4[0].checked || q4[1].checked || q4[2].checked || q4[3].checked;
  let q5IsChecked = q5[0].checked || q5[1].checked || q5[2].checked || q5[3].checked;
  let q6IsChecked = q6[0].checked || q6[1].checked || q6[2].checked || q6[3].checked;
  let q7IsChecked = q7[0].checked || q7[1].checked || q7[2].checked || q7[3].checked;
  let q8IsChecked = q8[0].checked || q8[1].checked || q8[2].checked || q8[3].checked;
  let q9IsChecked = q9[0].checked || q9[1].checked || q9[2].checked || q9[3].checked;
  let q10IsChecked = q10[0].checked || q10[1].checked || q10[2].checked || q10[3].checked;
  let q11IsChecked = q11[0].checked || q11[1].checked || q11[2].checked || q11[3].checked;
  let q12IsChecked = q12[0].checked || q12[1].checked || q12[2].checked || q12[3].checked;

  if (!q1IsChecked) {
    alert('Please answer Q1!');
    return;
  }
  if (!q2IsChecked) {
    alert('Please answer Q2!');
    return;
  }
  if (!q3IsChecked) {
    alert('Please answer Q3!');
    return;
  }
  if (!q4IsChecked) {
    alert('Please answer Q4!');
    return;
  }
  if (!q5IsChecked) {
    alert('Please answer Q5!');
    return;
  }
  if (!q6IsChecked) {
    alert('Please answer Q6!');
    return;
  }
  if (!q7IsChecked) {
    alert('Please answer Q7!');
    return;
  }
  if (!q8IsChecked) {
    alert('Please answer Q8!');
    return;
  }
  if (!q9IsChecked) {
    alert('Please answer Q9!');
    return;
  }
  if (!q10IsChecked) {
    alert('Please answer Q10!');
    return;
  }
  if (!q11IsChecked) {
    alert('Please answer Q11!');
    return;
  }
  if (!q12IsChecked) {
    alert('Please answer Q12!');
    return;
  }

  // select all radio buttons
  let radioButtons = document.querySelectorAll('input[type=radio]');

  // create an array to store the checked radio button values
  // let checkedValues = [];
  let totalPoint = 0;

  // loop through all radio buttons
  for (let i = 0; i < radioButtons.length; i++) {
    // check if radio button is checked
    if (radioButtons[i].checked) {
      // store the checked radio button value in the array
      // checkedValues.push(radioButtons[i].value);

      // 根據答案自加分數
      totalPoint += Number(radioButtons[i].value);
    }
  }

  // print the array of checked radio button values
  // console.log(checkedValues);
  // console.log(totalPoint);

  const resultDivEl = document.getElementById("result");
  resultDivEl.style.display = "block";

  const scoreEl = document.querySelector(".score");
  scoreEl.innerHTML = null;
  if (totalPoint == "0" || totalPoint == "1") {
    scoreEl.append(" " + totalPoint + " point");
  } else
    scoreEl.append(" " + totalPoint + " points");

  const commentEl = document.querySelector(".comment");
  commentEl.innerHTML = null;
  if (totalPoint <= 12) {
    commentEl.append("0-12 points, miserable! Crap! Your eating behavior is very bad, it is recommended to make up your mind to lose weight.");
  } else if (totalPoint <= 20) {
    commentEl.append("13-20 points, although you are a little better than 0-12 points, don't \"laugh like a turtle without a tail\", please try to change your eating habits.")
  } else if (totalPoint <= 30) {
    commentEl.append("21-30 points, come on! come on! It will be even better if the eating habits continue to improve the small deficiencies.")
  } else
    commentEl.append("31-36 points, you are awesome! Please persevere, you can easily get healthy!");
}

