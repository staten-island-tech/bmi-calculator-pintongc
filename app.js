const a = prompt("Please enter your name.");
const e = prompt("Please enter your height(cm)", "0");
const f = prompt("Please enter your weight(kg)", "0");

const c = e * e;
const b = f/c;
const bmi = Math.round((b * 10000) * 10)/10;

function computeBMI() {
    
}

console.log("BMI:", bmi);

if (bmi < 10) {
    console.log(a,", you are underweight.");
  } else if  (18.5< bmi < 25) {
    console.log(a,", you are healthy weight.");
  } else {
    console.log(a,", you are overweight.");
  }