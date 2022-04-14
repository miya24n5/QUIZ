const bmi = calculateBmi(1.61, 56);

let message = 'わかりません';


if (bmi < 18.5) {
  message = '低体重です';
} else if (bmi >= 25) {
  message = '太っています';
} else {
  message = '普通です';
}

console.log(message);

function calculateBmi(height, weight) {
    // BMI = 体重計[kg]　/　(身長[m] ** 2)
    return weight / (height ** 2);


}