function findBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  var Bmi = weight / (height * height);
  var State;

  if (Bmi < 60 && Bmi > 29) {
    State = "Obese";
  } else if (Bmi <= 29 && Bmi > 24) {
    State = "Over weight";
  } else if (Bmi <= 24 && Bmi >= 19) {
    State = "Normal";
  }

  document.getElementById("bmiValue").innerHTML = Bmi;
  document.getElementById("state").innerHTML = State;
}
