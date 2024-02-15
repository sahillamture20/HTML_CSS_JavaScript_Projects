const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Invalid height ${height}.`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Invalid weight ${weight}.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result

    if (bmi < 18.6) {
      result.innerHTML = `<span>Your BMI is ${bmi} and you are under weight.</span>`;
    } else if (18.6 < bmi < 24.9) {
      result.innerHTML = `<span>Your BMI is ${bmi} and your weight is in normal range.</span>`;
    } else {
      result.innerHTML = `<span>Your BMI is ${bmi} and you are overweight.</span>`;
    }
  }
});
