function getUserInfo() {
  const name = prompt("Please enter your name.");
  const height = prompt("Please enter your height(cm)", "0");
  const weight = prompt("Please enter your weight(kg)", "0");

  return {
    name,
    height,
    weight,
  };
}

const user = getUserInfo();

function computeBMI(user) {
  const c = user.height * user.height;
  const b = user.weight / c;
  const bmi = Math.round((b * 10000) * 10) / 10;
  return bmi;
}

const bmi = computeBMI(user);

console.log("BMI:", bmi);

function evaluateBMI(bmi) {
if (bmi < 18.5) {
    console.log(user.name,", you are underweight.");
  } else if  (18.5< bmi < 25) {
    console.log(user.name,", you are healthy weight.");
  } else {
    console.log(user.name,", you are overweight.");
  }
}

const evaluation = evaluateBMI(bmi);
