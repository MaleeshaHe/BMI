function findBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  var Bmi = weight / (height * height);
  var State;

  if (Bmi < 60 && Bmi > 29) {
    State = "Obese";
    $(document).ready(function () {
      $("#obese").fadeIn("slow");
      $("#over").hide();
      $("#normal").hide();
    });
  } else if (Bmi <= 29 && Bmi > 24) {
    State = "Over weight";
    $(document).ready(function () {
      $("#over").fadeIn("slow");
      $("#normal").hide();
      $("#obese").hide();
    });
  } else if (Bmi <= 24 && Bmi >= 19) {
    State = "Normal";
    $(document).ready(function () {
      $("#normal").fadeIn("slow");
      $("#over").hide();
      $("#obese").hide();
    });
  }
  $(document).ready(function () {
    $(".output").fadeIn();
  });

  document.getElementById("bmiValue").innerHTML = Math.round(Bmi * 100) / 100;
  document.getElementById("state").innerHTML = State;
}

$(document).ready(function () {
  $("#reset").click(function () {
    $(".output").fadeOut();
    $("img").hide("slow");
  });
});
