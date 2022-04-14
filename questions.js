// BMIを知れるif文をお試しで作成
// const bmi = calculateBmi(1.61, 56);

// let message = 'わかりません';

// if (bmi < 18.5) {
//   message = '低体重です';
// } else if (bmi >= 25) {
//   message = '太っています';
// } else {
//   message = '普通です';
// }

// console.log(message);

// function calculateBmi(height, weight) {
//     // BMI = 体重計[kg]　/　(身長[m] ** 2)
//     return weight / (height ** 2);
// }

const answersList = document.querySelectorAll('ol.answers li');


answersList.forEach(li => li.addEventListener('click', checkClickedAnswer))
// 正しい答え
const correctAnswers = {
  question1: 'D',
  question2: 'C',
  question3: 'A',
  question4: 'C',
}
function checkClickedAnswer(event){
  // クリックされた答えの要素（liタグ）
  const clickedAnswerElement = event.currentTarget;
  console.log(clickedAnswerElement.dataset.answer);

  // 選択した答え(A,B,C,D)
  const selectedAnswer = clickedAnswerElement.dataset.answer;

  const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
  // 正しい答え(A,B,C,D)
  const correctAnswer = correctAnswers[questionId];

  // メッセージを入れる変数を用意
  let message;

  // カラーコードを入れる変数を用意
  let answerColorCode;

  // 答えが正しいか判定
  if (selectedAnswer === correctAnswer) {
    // 正しい答えだった時
    message = '正解です！おめでとう！';
    answerColorCode = '';
  } else {
    // 間違った答えだった時
    message = 'ざんねん！不正解です！';
    answerColorCode = '#f05959';
  }
  


  alert(message);

  // 色を変更(間違っていた時だけ色が変わる)
  document.querySelector('span#correct-answer').style.color = answerColorCode;

  // 答え全体を表示
  document.querySelector('div#section-correct-answer').style.display = 'block';
}